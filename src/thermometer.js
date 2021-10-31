/* eslint-disable no-useless-constructor */
/* eslint-disable getter-return */
/* eslint-disable class-methods-use-this */
/*
 * thermometer.js
 * Language: javascript
 * Test: tests/thermometer.test.js
 * Path: src/thermometer.js
 *
 * Create a Thermometer class
 * Using getters and setters - https://bit.ly/3DLVSuF (Javascript.info)
 * getters - access properties https://mzl.la/3p9oLwR
 * setters - change properties https://mzl.la/3vjPiZl
 * private class field - https://mzl.la/3vhtrC5
 *
 */

/**
 * @class Thermometer
 *
 * An instance of this class is a temperature that
 * is represented in celsius units (store it in a private class field)
 * The other unit values are calculated from the
 * stored celsius temperature
 *
 *
 */
class Thermometer {
  #celcius = 0;

  /**
   * @constructor
   * @param {number} celsius
   */
  constructor(celsius) {
    this.#celcius = celsius;
  }

  /*  -------- celsius -------------------*/
  /**
   * @getter celsius
   * @returns {number}
   * @memberof Thermometer
   * @description - returns the celsius temperature
   * */
  get celsius() {
    return this.#celcius;
  }

  /**
   * @setter celsius
   * @param {number} celsius
   * @memberof Thermometer
   * @description - sets the celsius temperature
   */
  set celsius(tempCelsius) {
    this.#celcius = tempCelsius;
  }

  /*  -------- kelvin -------------------*/
  /**
   * @getter kelvin
   * @returns {number}
   * @memberof Thermometer
   * @description - returns the kelvin temperature
   */
  get kelvin() {
    return this.#celcius + 273.15;
  }

  /**
   * @setter kelvin
   * @param {number} kelvin
   * @memberof Thermometer
   * @description - sets the kelvin temperature
   */
  set kelvin(tempKelvin) {
    this.#celcius = tempKelvin - 273.15;
  }

  /*  -------- fahrenheit -------------------*/
  /**
   * @getter fahrenheit
   * @returns {number}
   * @memberof Thermometer
   * @description - returns the fahrenheit temperature
   */
  get fahrenheit() {
    return this.#celcius * 1.8 + 32;
  }

  /**
   * @setter fahrenheit
   * @param {number} fahrenheit
   * @memberof Thermometer
   * @description - sets the fahrenheit temperature
   */
  set fahrenheit(tempFahrenheit) {
    this.#celcius = (tempFahrenheit - 32) / 1.8;
  }

  /**
   * @method toString
   * @param {string} unit - 'C', 'K', 'F'
   * @returns {string} - the temperature in the specified unit
   * @memberof Thermometer
   * @description - returns a string with the temperature in the specified unit
   *
   * Example: Assuming an instance of this class is 0°C
   * toString('C') returns '0°C'
   * toString('K') returns '273.15K' - notice no ° symbol
   * toString('F') returns '32°C'
   * Any other value, or no value, for unit returns the celsius value + '°C'
   *
   */
  toString(unit) {
    switch (unit) {
      case 'C':
        return `${this.#celcius}°C`;
      case 'K':
        return `${this.kelvin}K`;
      case 'F':
        return `${this.fahrenheit}°F`;
      default:
        return `${this.#celcius}°C`;
    }
  }
}

module.exports = {
  Thermometer,
};
