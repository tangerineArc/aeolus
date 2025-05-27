# Aeolus · Weather Forecast Site

Aeolus is a weather forecast site that makes requests to the Visual Crossing API to gain weather data based on user location input and preferences; and presents the data with a (nice) UI.

## Features

- Search locations worldwide to gain access to weather data
- Hourly measures for the given day
- Daily measures for the given week
- Detailed and relevant weather metrics
- Get results in units you prefer (SI or Freedom units)

## Tech Stack

- **JavaScript** - scripting language for API calls and interactivity
- **Webpack** - module bundler for JavaScript and frontend assets
- **Visual Crossing** - offers historical and forecast weather data, weather API and weather tools
- **HTML & CSS** - the markup and stylesheet languages
- **ESLint & Prettier** - (dev) JavaScript linter and formatter respectively

## Repo Structure

Below is a list of the project directories and files:

- `/src/` - contains all the source files
  - `./assets/*` - contains visual assets
  - `./dom/`
    - `./cache-dom.js` - query and cache DOM nodes
    - `./render-dom.js` - rendering functions for DOM nodes
  - `./models/data.js` - fetch weather data from Visual Crossing API
  - `./ui/icons.js` - SVG nodes for icons
  - `./utils/`
    - `./process-data.js` - extract relevant data from API response
    - `./storage.js` - check for the availability of browser local-storage
  - `./index.js` - main file with driver code
  - `./style.css` - CSS stylesheet
  - `./template.html` - HTML markup

## Snapshots

| [![aeolus-1.png](https://i.postimg.cc/CM3KGxjM/aeolus-1.png)](https://postimg.cc/qgG000bW) | [![aeolus-2.png](https://i.postimg.cc/TwW61nNV/aeolus-2.png)](https://postimg.cc/ygB5r3Hx) |
| --- | --- |

