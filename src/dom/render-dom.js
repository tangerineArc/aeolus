"use strict";

import { currentWeatherIconContainer, currentMeanTemperatureNode, currentFeelsLikeTemperatureNode, currentConditionsTextNode, resolvedAddressNode, currentMinMaxTemperatureNodes, currentConditionsDescriptionNode, currentParameterContainers, hourlyConditionsContainer, hourContainers, dayContainers } from "./cache-dom.js";

import icons from "../ui/icons.js";

function renderCurrentConditionsData(currentConditions) {
  currentWeatherIconContainer.innerHTML =
    icons[currentConditions.weatherIcon[0]];

  currentMeanTemperatureNode.innerHTML = `
      ${currentConditions.meanTemperature[0]}<span>${currentConditions.meanTemperature[1]}</span>
    `;

  currentFeelsLikeTemperatureNode.textContent = currentConditions.feelsLike[0];

  currentConditionsTextNode.textContent = currentConditions.conditions[0];

  resolvedAddressNode.textContent = currentConditions.resolvedAddress[0];

  currentMinMaxTemperatureNodes.forEach((node) => {
    const value = currentConditions[node.dataset.label][0];
    const unit = currentConditions[node.dataset.label][1];

    node.innerHTML = `
        ${value}<span>${unit}</span>
      `;
  });

  currentConditionsDescriptionNode.textContent = currentConditions.description[0];

  currentParameterContainers.forEach((container) => {
    const parameterValue = container.querySelector(".parameter-value");

    const value = currentConditions[container.dataset.label][0];
    const unit = currentConditions[container.dataset.label][1];

    parameterValue.innerHTML = `
        ${(value !== null && String(value)) || "_"}<span class="parameter-unit">${unit || ""}</span>
      `;
  });
}

function renderHourlyConditionsData(hourlyConditions) {
  const currentTime = new Date();

  for (let i = 0; i < 24; i ++) {
    const container = hourContainers[i];
    const detailsContainer = container.querySelector(":scope > div:last-of-type");
    
    container.querySelector(":scope > div:first-of-type").innerHTML = `
      ${icons[hourlyConditions[i].weatherIcon[0]]}
      <div>${container.dataset.time}</div>
    `;

    detailsContainer.querySelector(":scope > p").textContent = hourlyConditions[i].conditions[0];

    detailsContainer.querySelector(":scope > div:first-of-type > p").textContent = `${hourlyConditions[i].meanTemperature[0]} ${hourlyConditions[i].meanTemperature[1]}`;

    detailsContainer.querySelector(":scope > div:last-of-type > p").textContent = `${hourlyConditions[i].precipitationChance[0]} ${hourlyConditions[i].precipitationChance[1]}`;

    if (currentTime.getHours() === i) {
      // 215 is the width of each container
      hourlyConditionsContainer.scroll({ left: 215 * i, behavior: "smooth" });
    }
  }
}

function renderSevenDaysConditionsData(sevenDaysConditions) {
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  for (let i = 0; i < 7; i ++) {
    const container = dayContainers[i];
    const detailsContainer = container.querySelector(":scope > div:last-of-type");

    const date = new Date(sevenDaysConditions[i].datetime);
    container.querySelector(":scope > div:first-of-type").innerHTML = `
      ${icons[sevenDaysConditions[i].weatherIcon[0]]}
      <div>${weekDays[date.getDay()]}</div>
      <div>${date.getDate()} ${months[date.getMonth()]}</div>
    `;

    detailsContainer.querySelector(":scope > p").textContent = sevenDaysConditions[i].conditions[0];

    detailsContainer.querySelector(":scope > div:first-of-type > p").textContent = `${sevenDaysConditions[i].meanTemperature[0]} ${sevenDaysConditions[i].meanTemperature[1]}`;

    detailsContainer.querySelector(":scope > div:last-of-type > p").textContent = `${sevenDaysConditions[i].precipitationChance[0]} ${sevenDaysConditions[i].precipitationChance[1]}`;
  }
}

export { renderCurrentConditionsData, renderHourlyConditionsData, renderSevenDaysConditionsData };
