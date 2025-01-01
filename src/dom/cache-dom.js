"use strict";

const currentWeatherIconContainer = document.querySelector("#summary");

const currentMeanTemperatureNode = document.querySelector("#description > p");

const currentFeelsLikeTemperatureNode = document.querySelector("#description > div > p:first-of-type > span");

const currentConditionsTextNode = document.querySelector("#description > div > p:nth-of-type(2)");

const resolvedAddressNode = document.querySelector("#description > div > p:last-of-type");

const currentMinMaxTemperatureNodes = document.querySelectorAll("#temperature-summary > div > p:first-of-type");

const currentParameterContainers = document.querySelectorAll("#current-conditions > div");

export { currentWeatherIconContainer, currentMeanTemperatureNode, currentFeelsLikeTemperatureNode, currentConditionsTextNode, resolvedAddressNode, currentMinMaxTemperatureNodes, currentParameterContainers };
