// Get the form
let converterForm = document.getElementById("converter-form");

// Get the input field
let inputField = document.getElementById("input-value");

// Get the conversion select list
let conversionType = document.getElementById("conversion-type");

// Get the result area
let resultArea = document.getElementById("conversion-result");

// Get the options from the select list
let conversionOptions = document.getElementsByTagName("option");

// Listen for the form submission
converterForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Convert the input to a number
    let input_value = parseFloat(inputField.value);

    // Get the selected option index
    let choice = conversionType.selectedIndex;

    let result;
    let output;

    if (choice === 0) {
        result = input_value * 2.54;
        output = input_value + " inches is " + result.toFixed(2) + " centimeters";
    }

    else if (choice === 1) {
        result = input_value * 30.48;
        output = input_value + " feet is " + result.toFixed(2) + " centimeters";
    }

    else if (choice === 2) {
        result = input_value * 0.91;
        output = input_value + " yards is " + result.toFixed(2) + " meters";
    }

    else if (choice === 3) {
        result = input_value * 1.61;
        output = input_value + " miles is " + result.toFixed(2) + " kilometers";
    }

    else if (choice === 4) {
        result = input_value * 0.39;
        output = input_value + " centimeters is " + result.toFixed(2) + " inches";
    }

    else if (choice === 5) {
        result = input_value * 0.0328;
        output = input_value + " centimeters is " + result.toFixed(2) + " feet";
    }

    else if (choice === 6) {
        result = input_value * 1.09;
        output = input_value + " meters is " + result.toFixed(2) + " yards";
    }

    else if (choice === 7) {
        result = input_value * 0.62;
        output = input_value + " kilometers is " + result.toFixed(2) + " miles";
    }

    resultArea.innerHTML = output;
});