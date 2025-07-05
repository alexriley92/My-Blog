const conversionRates = {
  meter: 1,
  kilometer: 0.001,
  mile: 0.000621371,
  foot: 3.28084,
};

function convertUnit() {
  const value = parseFloat(document.getElementById("inputValue").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;

  if (isNaN(value)) {
    document.getElementById("result").innerText = "Please enter a valid number.";
    return;
  }

  const valueInMeters = value / conversionRates[from];
  const convertedValue = valueInMeters * conversionRates[to];

  document.getElementById("result").innerText = `Result: ${convertedValue.toFixed(4)} ${to}`;
}
