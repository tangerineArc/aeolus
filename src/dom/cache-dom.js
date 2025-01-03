"use strict";

const locationInput = document.querySelector("#location-input");

const searchButton = document.querySelector("#search-button");

const unitsSelector = document.querySelector("#units-selector");

const dropDown = document.querySelector("#drop-down-menu");

const dropDownItems = document.querySelectorAll("#drop-down-menu > div");

const currentWeatherIconContainer = document.querySelector("#summary");

const currentMeanTemperatureNode = document.querySelector("#description > p");

const currentFeelsLikeTemperatureNode = document.querySelector("#description > div > p:first-of-type > span");

const currentConditionsTextNode = document.querySelector("#description > div > p:nth-of-type(2)");

const resolvedAddressNode = document.querySelector("#description > div > p:last-of-type");

const currentMinMaxTemperatureNodes = document.querySelectorAll("#temperature-summary > div > p:first-of-type");

const currentConditionsDescriptionNode = document.querySelector("#current-description > p");

const currentParameterContainers = document.querySelectorAll("#current-conditions > div");

const hourlyConditionsContainer = document.querySelector("#hourly-conditions");

const hourContainers = document.querySelectorAll(".hour-container");

const dayContainers = document.querySelectorAll(".day-container");

export { locationInput, searchButton, unitsSelector, dropDown, dropDownItems, currentWeatherIconContainer, currentMeanTemperatureNode, currentFeelsLikeTemperatureNode, currentConditionsTextNode, resolvedAddressNode, currentMinMaxTemperatureNodes, currentConditionsDescriptionNode, currentParameterContainers, hourlyConditionsContainer, hourContainers, dayContainers };
