const convertToCelsius = function(temp) {
    let celsiusTemp = (temp - 32) * 5/9;
    celsiusTemp = Math.round(celsiusTemp * 10) / 10
    return celsiusTemp;
};

const convertToFahrenheit = function(temp) {
  let fahrenheitTemp = (temp * 9/5 + 32);
  fahrenheitTemp = Math.round(fahrenheitTemp * 10) / 10;
  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
