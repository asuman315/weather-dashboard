## Overview

Weather Dashboard is a web application built with Next.js, TypeScript, and Tailwind CSS that allows users to search for and display weather forecasts. It features a clean, responsive design and provides functionalities such as a temperature unit toggling (Celsius/Fahrenheit), and real-time weather updates for any city globally.

## Features

- Real-time weather updates
- Temperature unit toggle (Celsius/Fahrenheit)
- Responsive design for all devices
- Search functionality for global cities

## Project Structure

The project is organized into the following directories:

```sh
|-- pages/
|     |-- index.tsx
|     |-- _app.tsx
|-- components/
|     |-- shared-components
|     |      |-- [mysharedComponent.tsx]     
|     |-- ForecastCard.tsx
|     |-- TemperatureToggle.tsx
|     |-- Layout.tsx
|     |-- SearchBar.tsx
|-- public/
|     |-- favicon.ico
|-- styles/
|     |-- globals.css
|-- utils/
|     |-- api.ts
|     |-- convertTemperature.ts
|-- hooks/
|     |-- useWeather.ts
|-- types/
|     |-- weather.ts
|-- __tests__
|     |-- [mytest.test.tsx]
|-- tailwind.config.js
|-- postcss.config.js
|-- tsconfig.json
|-- next.config.js
|-- package.json
```

- **components/**

  - This directory contains components for our App.

- **\_app.tsx** - Main Next.js custom app component. The root component in app. - responsible for initializing and managing application-wide context using React Context API. It is used by the application to provide global state management capabilities.

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
   ```
2. Go to directory weather-dashboard
   ```bash
   cd weather-dashboard
   ```
3. Install the dependencies
```bash
   npm install
   # or
   yarn install
  ```
4. Start the development server

```bash
npm run dev / yarn dev
```
