"use strict";

import "./style.css";

import getWeatherData from "./models/data";

import { getCurrentConditions, getHourlyConditions } from "./utils/process-data.js";

import { renderCurrentConditionsData, renderHourlyConditionsData } from "./dom/render-dom.js";

const units = "metric";
const location = "patna";

getWeatherData(location, units).then(data => {
  const currentConditions = getCurrentConditions(data, units);
  const hourlyConditions = getHourlyConditions(data, units);

  renderCurrentConditionsData(currentConditions);
  renderHourlyConditionsData(hourlyConditions);
});
