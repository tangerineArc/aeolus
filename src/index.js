"use strict";

import "./style.css";

import getWeatherData from "./models/data";

import { getCurrentConditions, getHourlyConditions, getSevenDaysConditions } from "./utils/process-data.js";

import { unitsSelector, dropDown, dropDownItems, locationInput, searchButton } from "./dom/cache-dom.js";
import { renderCurrentConditionsData, renderHourlyConditionsData, renderSevenDaysConditionsData } from "./dom/render-dom.js";

let units = "metric";
const location = "patna";

getWeatherData(location, units).then(data => {
  const currentConditions = getCurrentConditions(data, units);
  const hourlyConditions = getHourlyConditions(data, units);
  const sevenDaysConditions = getSevenDaysConditions(data, units);

  renderCurrentConditionsData(currentConditions);
  renderHourlyConditionsData(hourlyConditions);
  renderSevenDaysConditionsData(sevenDaysConditions);
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

dropDownItems.forEach(item => {
  item.addEventListener("click", () => {
    units = item.dataset.unit;
    getWeatherData(location, units).then(data => {
      const currentConditions = getCurrentConditions(data, units);
      const hourlyConditions = getHourlyConditions(data, units);
      const sevenDaysConditions = getSevenDaysConditions(data, units);

      renderCurrentConditionsData(currentConditions);
      renderHourlyConditionsData(hourlyConditions);
      renderSevenDaysConditionsData(sevenDaysConditions);
    });

    dropDown.querySelector(".selected-setting").className = "";
    item.className = "selected-setting";

    dropDown.style.visibility = "hidden";
  });
});

document.addEventListener("keydown", event => {
  if (locationInput === document.activeElement && locationInput.value && event.key === "Enter") {
    getWeatherData(locationInput.value, units).then(data => {
      const currentConditions = getCurrentConditions(data, units);
      const hourlyConditions = getHourlyConditions(data, units);
      const sevenDaysConditions = getSevenDaysConditions(data, units);
  
      renderCurrentConditionsData(currentConditions);
      renderHourlyConditionsData(hourlyConditions);
      renderSevenDaysConditionsData(sevenDaysConditions);
    });
  }
});

searchButton.addEventListener("click", () => {
  if (!locationInput.value) return;

  getWeatherData(locationInput.value, units).then(data => {
    const currentConditions = getCurrentConditions(data, units);
    const hourlyConditions = getHourlyConditions(data, units);
    const sevenDaysConditions = getSevenDaysConditions(data, units);

    renderCurrentConditionsData(currentConditions);
    renderHourlyConditionsData(hourlyConditions);
    renderSevenDaysConditionsData(sevenDaysConditions);
  });
});
