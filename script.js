
function convertTemperature() {
            var temperatureInput = document.getElementById("temperature").value;
            var selectedUnit = document.getElementById("unit").value;
            var convertedTemperature;

            // Validate input as a number
            if (isNaN(temperatureInput)) {
                alert("Please enter a valid number for temperature.");
                return;
            }

            // Convert temperature based on selected unit
            if (selectedUnit === "celsius") {
                convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
            } else if (selectedUnit === "fahrenheit") {
                convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
            } else if (selectedUnit === "kelvin") {
                convertedTemperature = parseFloat(temperatureInput) + 273.15;
            }

            // Display the result
            document.getElementById("result").innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " " + selectedUnit.toUpperCase();
    }
