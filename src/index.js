"use strict";

import "./style.css";

import getWeatherData from "./models/data";

import {
  getCurrentConditions,
  getHourlyConditions,
  getSevenDaysConditions,
} from "./utils/process-data.js";
import { isStorageAvailable } from "./utils/storage.js";

import {
  loadingDialog,
  unitsSelector,
  dropDown,
  dropDownItems,
  errorContainer,
  locationInput,
  searchButton,
} from "./dom/cache-dom.js";
import {
  renderCurrentConditionsData,
  renderHourlyConditionsData,
  renderSevenDaysConditionsData,
} from "./dom/render-dom.js";

let units = "metric";
let location = "bankura";

let isLoading = true;

loadingDialog.showModal();

if (isStorageAvailable()) {
  if (!localStorage.getItem("location")) {
    localStorage.setItem("location", location);
  } else {
    location = localStorage.getItem("location");
  }

  if (!localStorage.getItem("units")) {
    localStorage.setItem("units", units);
  } else {
    units = localStorage.getItem("units");

    dropDown.querySelector(".selected-setting").className = "";
    dropDown.querySelector(`[data-unit="${units}"]`).className =
      "selected-setting";
  }
}

getWeatherData(location, units)
  .then((data) => {
    handleData(data);
    errorContainer.style.display = "none";
  })
  .catch((error) => {
    handleError(error.message);
  })
  .finally(() => {
    loadingDialog.close();
    isLoading = false;
  });

unitsSelector.addEventListener("click", () => {
  if (getComputedStyle(dropDown).visibility === "hidden") {
    dropDown.style.visibility = "visible";
    unitsSelector.style.backgroundColor = "var(--tertiary-background-color)";
  } else if (getComputedStyle(dropDown).visibility === "visible") {
    dropDown.style.visibility = "hidden";
    unitsSelector.style.backgroundColor = "var(--secondary-background-color)";
  }
});

dropDownItems.forEach((item) => {
  item.addEventListener("click", () => {
    units = item.dataset.unit;
    getWeatherData(location, units)
      .then((data) => {
        handleData(data);
        errorContainer.style.display = "none";
      })
      .catch((error) => {
        handleError(error.message);
      })
      .finally(() => {
        loadingDialog.close();
        isLoading = false;
      });

    if (isStorageAvailable) localStorage.setItem("units", units);

    loadingDialog.showModal();
    isLoading = true;

    dropDown.querySelector(".selected-setting").className = "";
    item.className = "selected-setting";

    dropDown.style.visibility = "hidden";
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isLoading) {
    event.preventDefault(); // prevent the loader from closing
  }

  if (
    locationInput === document.activeElement &&
    locationInput.value &&
    event.key === "Enter"
  ) {
    getWeatherData(locationInput.value, units)
      .then((data) => {
        handleData(data);

        location = locationInput.value;
        if (isStorageAvailable) localStorage.setItem("location", location);

        locationInput.value = "";
        locationInput.blur();
        errorContainer.style.display = "none";
      })
      .catch((error) => {
        handleError(error.message);
      })
      .finally(() => {
        loadingDialog.close();
        isLoading = false;
      });

    loadingDialog.showModal();
    isLoading = true;
  }
});

searchButton.addEventListener("click", () => {
  if (!locationInput.value) return;

  getWeatherData(locationInput.value, units)
    .then((data) => {
      handleData(data);

      location = locationInput.value;
      if (isStorageAvailable) localStorage.setItem("location", location);

      locationInput.value = "";
      locationInput.blur();
      errorContainer.style.display = "none";
    })
    .catch((error) => {
      handleError(error.message);
    })
    .finally(() => {
      loadingDialog.close();
      isLoading = false;
    });

  loadingDialog.showModal();
  isLoading = true;
});

function handleError(message) {
  errorContainer.style.display = "flex";
  errorContainer.querySelector(":scope > p").textContent = message;
}

function handleData(data) {
  const currentConditions = getCurrentConditions(data, units);
  const hourlyConditions = getHourlyConditions(data, units);
  const sevenDaysConditions = getSevenDaysConditions(data, units);

  renderCurrentConditionsData(currentConditions);
  renderHourlyConditionsData(hourlyConditions);
  renderSevenDaysConditionsData(sevenDaysConditions);
}
