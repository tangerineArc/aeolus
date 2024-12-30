const snow = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="snow-icon" class="weather-icon">
    <path d="m10 20-1.25-2.5L6 18"/>
    <path d="M10 4 8.75 6.5 6 6"/>
    <path d="m14 20 1.25-2.5L18 18"/>
    <path d="m14 4 1.25 2.5L18 6"/>
    <path d="m17 21-3-6h-4"/>
    <path d="m17 3-3 6 1.5 3"/>
    <path d="M2 12h6.5L10 9"/>
    <path d="m20 10-1.5 2 1.5 2"/>
    <path d="M22 12h-6.5L14 15"/>
    <path d="m4 10 1.5 2L4 14"/>
    <path d="m7 21 3-6-1.5-3"/>
    <path d="m7 3 3 6h4"/>
  </svg>
`;

const snowShowersDay = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="snow-showers-day-icon" class="weather-icon">
    <path d="M10 21v-1"/><path d="M10 4V3"/>
    <path d="M10 9a3 3 0 0 0 0 6"/>
    <path d="m14 20 1.25-2.5L18 18"/>
    <path d="m14 4 1.25 2.5L18 6"/>
    <path d="m17 21-3-6 1.5-3H22"/>
    <path d="m17 3-3 6 1.5 3"/>
    <path d="M2 12h1"/>
    <path d="m20 10-1.5 2 1.5 2"/>
    <path d="m3.64 18.36.7-.7"/>
    <path d="m4.34 6.34-.7-.7"/>
  </svg>
`;

const snowShowersNight = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="snow-showers-night-icon" class="weather-icon">
    <path d="m10 20-1.25-2.5L6 18"/>
    <path d="M10 4 8.75 6.5 6 6"/>
    <path d="M10.585 15H10"/>
    <path d="M2 12h6.5L10 9"/>
    <path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"/>
    <path d="m4 10 1.5 2L4 14"/>
    <path d="m7 21 3-6-1.5-3"/>
    <path d="m7 3 3 6h2"/>
  </svg>
`;

const thunderRain = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="thunder-rain-icon" class="weather-icon">
    <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/>
    <path d="m13 12-3 5h4l-3 5"/>
  </svg>
`;

const thunderSHowersDay = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="thunder-showers-day-icon" class="weather-icon">
    <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/>
    <path d="m13 12-3 5h4l-3 5"/>
  </svg>
`;

const thunderShowersNight = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="thunder-showers-night-icon" class="weather-icon">
    <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/>
    <path d="m13 12-3 5h4l-3 5"/>
  </svg>
`;

const rain = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="rain-icon" class="weather-icon">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
    <path d="M16 14v2"/>
    <path d="M8 14v2"/>
    <path d="M16 20h.01"/>
    <path d="M8 20h.01"/>
    <path d="M12 16v2"/>
    <path d="M12 22h.01"/>
  </svg>
`;

const showersDay = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="showers-day-icon" class="weather-icon">
    <path d="M12 2v2"/>
    <path d="m4.93 4.93 1.41 1.41"/>
    <path d="M20 12h2"/>
    <path d="m19.07 4.93-1.41 1.41"/>
    <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/>
    <path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"/>
    <path d="M11 20v2"/>
    <path d="M7 19v2"/>
  </svg>
`;

const showersNight = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="showers-night-icon" class="weather-icon">
    <path d="M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"/>
    <path d="M11 20v2"/>
    <path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"/>
    <path d="M7 19v2"/>
  </svg>
`;

const fog = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="fog-icon" class="weather-icon">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
    <path d="M16 17H7"/>
    <path d="M17 21H9"/>
  </svg>
`;

const wind = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="wind-icon" class="weather-icon">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
    <path d="M16 17H7"/>
    <path d="M17 21H9"/>
  </svg>
`;

const cloudy = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="cloudy-icon" class="weather-icon">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
  </svg>
`;

const partlyCloudyDay = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="partly-cloudy-day-icon" class="weather-icon">
    <path d="M12 2v2"/>
    <path d="m4.93 4.93 1.41 1.41"/>
    <path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/>
    <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/>
    <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>
  </svg>
`;

const partlyCloudyNight = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="partly-cloudy-night-icon" class="weather-icon">
    <path d="M12 2v2"/>
    <path d="m4.93 4.93 1.41 1.41"/>
    <path d="M20 12h2"/>
    <path d="m19.07 4.93-1.41 1.41"/>
    <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>
  </svg>
`;

const clearDay = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="clear-day-icon" class="weather-icon">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/>
    <path d="M12 20v2"/>
    <path d="m4.93 4.93 1.41 1.41"/>
    <path d="m17.66 17.66 1.41 1.41"/>
    <path d="M2 12h2"/><path d="M20 12h2"/>
    <path d="m6.34 17.66-1.41 1.41"/>
    <path d="m19.07 4.93-1.41 1.41"/>
  </svg>
`;

const clearNight = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="clear-night-icon" class="weather-icon">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
`;

export { snow, snowShowersDay, snowShowersNight, thunderRain, thunderSHowersDay, thunderShowersNight, showersDay, showersNight, rain, fog, wind, cloudy, partlyCloudyDay, partlyCloudyNight, clearDay, clearNight };