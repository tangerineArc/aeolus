"use strict";

export default async function getWeatherData(location, units) {
  const KEY = "KDGR8KRWHP6GDG983V5QP7PYV";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${units}&key=${KEY}&contentType=json`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
