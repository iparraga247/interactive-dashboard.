# Interactive Productivity Dashboard

This project is a web-based dashboard built for **WEB-115** to demonstrate interactive JavaScript features.

## TODO: Future Enhancements

* [ ] Add a metric conversion tool.
* [ ] Integrate a task list with array storage.
* [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task goal calculator

## Weekly Task Goals

The Weekly Task Goals feature allows users to enter their name, daily task goal, and number of weekly bonus tasks. The calculator multiplies the daily goal by five workdays and then adds the bonus tasks to determine the user's total weekly task goal.

## Imperial/Metric Converter

The Imperial/Metric Converter is a tool that converts measurements between Imperial and Metric units. The converter can convert inches to centimeters, feet to centimeters, yards to meters, miles to kilometers, centimeters to inches, centimeters to feet, meters to yards, and kilometers to miles.

### Logic and Pseudocode

BEGIN

```
DISPLAY "Metric Converter"

INPUT value

DISPLAY "Choose a conversion:"
DISPLAY "1. Inches to Centimeters"
DISPLAY "2. Feet to Centimeters"
DISPLAY "3. Yards to Meters"
DISPLAY "4. Miles to Kilometers"
DISPLAY "5. Centimeters to Inches"
DISPLAY "6. Centimeters to Feet"
DISPLAY "7. Meters to Yards"
DISPLAY "8. Kilometers to Miles"

INPUT choice

IF choice = 1 THEN
    SET result = value * 2.54
    DISPLAY result

ELSE IF choice = 2 THEN
    SET result = value * 30.48
    DISPLAY result

ELSE IF choice = 3 THEN
    SET result = value * 0.91
    DISPLAY result

ELSE IF choice = 4 THEN
    SET result = value * 1.61
    DISPLAY result

ELSE IF choice = 5 THEN
    SET result = value * 0.39
    DISPLAY result

ELSE IF choice = 6 THEN
    SET result = value * 0.0328
    DISPLAY result

ELSE IF choice = 7 THEN
    SET result = value * 1.09
    DISPLAY result

ELSE IF choice = 8 THEN
    SET result = value * 0.62
    DISPLAY result

ELSE
    DISPLAY "Invalid conversion choice"
```

END
