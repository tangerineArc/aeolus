"use strict";

import { currentWeatherIconContainer, currentMeanTemperatureNode, currentFeelsLikeTemperatureNode, currentConditionsTextNode, resolvedAddressNode, currentMinMaxTemperatureNodes, currentParameterContainers } from "./cache-dom.js";

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

  currentParameterContainers.forEach((container) => {
    const parameterValue = container.querySelector(".parameter-value");

    const value = currentConditions[container.dataset.label][0];
    const unit = currentConditions[container.dataset.label][1];

    parameterValue.innerHTML = `
        ${(value !== null && String(value)) || "_"}<span class="parameter-unit">${unit || ""}</span>
      `;
  });
}

export { renderCurrentConditionsData };
