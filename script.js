function convertTemperature() {
  const fromUnit = document.getElementById("fromUnit").value;
  const inputValue = parseFloat(document.getElementById("inputValue").value);

  if (isNaN(inputValue)) {
    document.getElementById("result").textContent = "Invalid input";
    return;
  }

  const toUnit = document.getElementById("toUnit").value;
  let convertedValue = 0;
  let resultText = "";

  switch (toUnit) {
    case "celsius":
      convertedValue = toCelsius(fromUnit, inputValue);
      resultText = `${inputValue} ${fromUnit.toLowerCase()} is equal to ${convertedValue} °C`;
      break;
    case "fahrenheit":
      convertedValue = toFahrenheit(fromUnit, inputValue);
      resultText = `${inputValue} ${fromUnit.toLowerCase()} is equal to ${convertedValue} °F`;
      break;
    case "kelvin":
      convertedValue = toKelvin(fromUnit, inputValue);
      resultText = `${inputValue} ${fromUnit.toLowerCase()} is equal to ${convertedValue} K`;
      break;
    default:
      break;
  }

  document.getElementById("result").textContent = resultText;
}

function toCelsius(fromUnit, value) {
  switch (fromUnit) {
    case "celsius":
      return value;
    case "fahrenheit":
      return ((value - 32) * 5) / 9;
    case "kelvin":
      return value - 273.15;
    default:
      return 0;
  }
}

function toFahrenheit(fromUnit, value) {
  switch (fromUnit) {
    case "celsius":
      return (value * 9) / 5 + 32;
    case "fahrenheit":
      return value;
    case "kelvin":
      return ((value - 273.15) * 9) / 5 + 32;
    default:
      return 0;
  }
}

function toKelvin(fromUnit, value) {
  switch (fromUnit) {
    case "celsius":
      return value + 273.15;
    case "fahrenheit":
      return ((value - 32) * 5) / 9 + 273.15;
    case "kelvin":
      return value;
    default:
      return 0;
  }
}
