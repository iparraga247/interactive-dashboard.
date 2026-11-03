

/* Imperial/Metric Converter */

document.getElementById("converter-form").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get the input value
    let input_value = document.getElementById("input-value").value;
    input_value = parseFloat(input_value);

    // Get the selected conversion
    let conversion_type = document.getElementById("conversion-type");
    let selected_index = conversion_type.selectedIndex;

    let selected_option = conversion_type.getElementsByTagName("option")[selected_index].value;

    let result;
    let output;

    // Perform the selected conversion
    switch (selected_option) {

        case "inches-to-cm":
            result = input_value * 2.54;
            output = input_value + " inches is " + result.toFixed(2) + " centimeters.";
            break;

        case "feet-to-cm":
            result = input_value * 30.48;
            output = input_value + " feet is " + result.toFixed(2) + " centimeters.";
            break;

        case "yards-to-meters":
            result = input_value * 0.9144;
            output = input_value + " yards is " + result.toFixed(2) + " meters.";
            break;

        case "miles-to-km":
            result = input_value * 1.60934;
            output = input_value + " miles is " + result.toFixed(2) + " kilometers.";
            break;

        case "cm-to-inches":
            result = input_value / 2.54;
            output = input_value + " centimeters is " + result.toFixed(2) + " inches.";
            break;

        case "cm-to-feet":
            result = input_value / 30.48;
            output = input_value + " centimeters is " + result.toFixed(2) + " feet.";
            break;

        case "meters-to-yards":
            result = input_value / 0.9144;
            output = input_value + " meters is " + result.toFixed(2) + " yards.";
            break;

        case "km-to-miles":
            result = input_value / 1.60934;
            output = input_value + " kilometers is " + result.toFixed(2) + " miles.";
            break;
    }

    // Display the conversion result
    document.getElementById("conversion-result").innerHTML = output;

});
