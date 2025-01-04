"use strict";

export default async function getWeatherData(location, units) {
  const KEY = "KDGR8KRWHP6GDG983V5QP7PYV";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${units}&iconSet=icons2&key=${KEY}&contentType=json`;

  let statusError = false;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      statusError = true;
      throw new Error(
        `The server responded with a status of ${response.status}. The location entered might not be available.`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (statusError) throw error;
    else
      throw new Error(
        `${error.message}: Ensure that your device is connected to the internet.`,
      );
  }
}
