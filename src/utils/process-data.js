"use strict";

function getCurrentConditions(data, unitSystem) {
  const units = getUnits(unitSystem);

  return {
    resolvedAddress: [data.resolvedAddress, null],
    description: [data.description, null],
    meanTemperature: [data.currentConditions.temp, units.temperature],
    feelsLike: [data.currentConditions.feelslike, units.temperature],
    relativeHumidity: [data.currentConditions.humidity, "%"],
    dewPoint: [data.currentConditions.dew, units.temperature],
    precipitation: [data.currentConditions.precip, units.precipitation],
    precipitationChance: [data.currentConditions.precipprob, "%"],
    snow: [data.currentConditions.snow, units.snow],
    snowDepth: [data.currentConditions.snowdepth, units.snow],
    precipitationType: [data.currentConditions.preciptype, null],
    windGust: [data.currentConditions.windgust, units.speed],
    windSpeed: [data.currentConditions.windspeed, units.speed],
    windDirection: [data.currentConditions.winddir, "\u00B0"],
    seaLevelPressure: [data.currentConditions.pressure, "mb"],
    visibility: [data.currentConditions.visibility, units.distance],
    cloudCover: [data.currentConditions.cloudcover, "%"],
    solarRadiation: [data.currentConditions.solarradiation, "W/m\u00B2"],
    solarEnergy: [data.currentConditions.solarenergy, "MJ/m\u00B2"],
    uvIndex: [data.currentConditions.uvindex, null],
    conditions: [data.currentConditions.conditions, null],
    weatherIcon: [data.currentConditions.icon, null],
    sunriseTime: [data.currentConditions.sunrise, null],
    sunsetTime: [data.currentConditions.sunset, null],
    moonphase: [data.currentConditions.moonphase, null],
    maximumTemperature: [data.days[0].tempmax, units.temperature],
    minimumTemperature: [data.days[0].tempmin, units.temperature],
    precipitationCover: [data.days[0].precipcover, "%"]
  };
}

function getHourlyConditions(data, unitSystem) {
  const units = getUnits(unitSystem);

  const conditions = [];
  for (let i = 0; i < 24; i ++) {
    conditions.push({
      datetime: [data.days[0].hours[i].datetime, null],
      conditions: [data.days[0].hours[i].conditions, null],
      weatherIcon: [data.days[0].hours[i].icon, null],
      precipitationChance: [data.days[0].hours[i].precipprob, "%"],
      meanTemperature: [data.days[0].hours[i].temp, units.temperature]
    });
  }
}

function getSevenDaysConditions(data, unitSystem) {
  const units = getUnits(unitSystem);

  const conditions = [];
  for (let i = 1; i <= 6; i ++) {
    conditions.push({
      datetime: [data.days[i].datetime, null],
      conditions: [data.days[i].conditions, null],
      description: [data.days[i].description, null],
      weatherIcon: [data.days[i].icon, null],
      precipitationChance: [data.days[i].precipprob, "%"],
      meanTemperature: [data.days[i].temp, units.temperature],
      maximumTemperature: [data.days[i].tempmax, units.temperature],
      minimumTemperature: [data.days[i].tempmin, units.temperature]
    });
  }

  return conditions;
}

function getUnits(system) {
  switch (system) {
    case "metric":
      return {
        temperature: "\u00B0 C",
        precipitation: "mm",
        snow: "cm",
        speed: "kph",
        distance: "km",
      };
    case "us":
      return {
        temperature: "\u00B0 F",
        precipitation: "inches",
        snow: "inches",
        speed: "mph",
        distance: "miles",
      };
    case "uk":
      return {
        temperature: "\u00B0 C",
        precipitation: "mm",
        snow: "cm",
        speed: "mph",
        distance: "miles",
      };
  }
}

export { getCurrentConditions, getHourlyConditions, getSevenDaysConditions };
