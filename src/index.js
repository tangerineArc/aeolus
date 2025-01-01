"use strict";

import "./style.css";

import getWeatherData from "./models/data";

import { getCurrentConditions } from "./utils/process-data.js";

import { renderCurrentConditionsData } from "./dom/render-dom.js";

const units = "metric";
const location = "patna";

getWeatherData(location, units).then(data => {
  const currentConditions = getCurrentConditions(data, units);

  renderCurrentConditionsData(currentConditions);
});
