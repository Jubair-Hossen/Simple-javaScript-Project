// celcius to fahrenheit
var celsius = document.querySelector("#celsius");
var fahrenheit = document.querySelector("#celsiusToFahrenheitResult");
var btn = document.querySelector("#celsiusToFahrenheitBtn");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (celsius.value == "") {
        fahrenheit.innerHTML = "Enter any Value";
    }
    else {
        var celsiusValue = parseInt(celsius.value);
        var farhenheitValue = (celsiusValue * 9 / 5) + 32;
        fahrenheit.innerHTML = farhenheitValue;
    }
});

// grade calculation

var number = document.querySelector("#number");
var grade = document.querySelector("#grade");
var gradeBtn = document.querySelector("#gradeBtn");

gradeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var userNumber = parseInt(number.value);
    if (number.value == "") {
        grade.innerHTML = "Enter Your Number";
    }
    else if (userNumber >= 80 && userNumber <= 100) {
        grade.innerHTML = "A+";

    }
    else if (userNumber >= 70 && userNumber <= 79) {
        grade.innerHTML = "A";
    }
    else if (userNumber >= 60 && userNumber <= 69) {
        grade.innerHTML = "A-";
    }
    else if (userNumber >= 50 && userNumber <= 59) {
        grade.innerHTML = "B";
    }
    else if (userNumber >= 40 && userNumber <= 49) {
        grade.innerHTML = "C";
    }
    else if (userNumber >= 33 && userNumber <= 39) {
        grade.innerHTML = "D";
    }
    else if (userNumber >= 0 && userNumber <= 32) {
        grade.innerHTML = "F";
    }
    else {
        grade.innerHTML = "Enter 0-100";
    }
})
