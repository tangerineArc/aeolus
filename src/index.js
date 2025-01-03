"use strict";

import "./style.css";

import getWeatherData from "./models/data";

import { getCurrentConditions, getHourlyConditions, getSevenDaysConditions } from "./utils/process-data.js";

import { unitsSelector, dropDown, dropDownItems } from "./dom/cache-dom.js";
import { renderCurrentConditionsData, renderHourlyConditionsData, renderSevenDaysConditionsData } from "./dom/render-dom.js";

const units = "metric";
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
  } else if (getComputedStyle(dropDown).visibility === "visible") {
    dropDown.style.visibility = "hidden";
  }
});

dropDownItems.forEach(item => {
  item.addEventListener("click", () => {
    getWeatherData(location, item.dataset.unit).then(data => {
      const currentConditions = getCurrentConditions(data, item.dataset.unit);
      const hourlyConditions = getHourlyConditions(data, item.dataset.unit);
      const sevenDaysConditions = getSevenDaysConditions(data, item.dataset.unit);

      renderCurrentConditionsData(currentConditions);
      renderHourlyConditionsData(hourlyConditions);
      renderSevenDaysConditionsData(sevenDaysConditions);
    });

    dropDown.querySelector(".selected-setting").className = "";
    item.className = "selected-setting";

    dropDown.style.visibility = "hidden";
  });
});
