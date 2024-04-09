// utils/convertTemperature.ts

/**
 * Converts Fahrenheit to Celsius.
 * @param {number} tempFahrenheit - The temperature in Fahrenheit.
 * @returns {number} The temperature in Celsius.
 */
const fahrenheitToCelsius = (tempFahrenheit: number): number => {
    return ((tempFahrenheit - 32) * 5) / 9;
  };
  
  /**
   * Converts Celsius to Fahrenheit.
   * @param {number} tempCelsius - The temperature in Celsius.
   * @returns {number} The temperature in Fahrenheit.
   */
  const celsiusToFahrenheit = (tempCelsius: number): number => {
    return (tempCelsius * 9) / 5 + 32;
  };
  
  export { fahrenheitToCelsius, celsiusToFahrenheit };
  