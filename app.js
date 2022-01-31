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


// fahrenheit to celsius

var deyaTapmatra = document.querySelector("#deyaTapmatra");
var jekaneResultBosbe = document.querySelector("#jekaneResultBosbe");
var convertBtn = document.querySelector("#convertBtn");

convertBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var deyaTapmatraMan = parseInt(deyaTapmatra.value);
    if (deyaTapmatra.value == "") {
        jekaneResultBosbe.innerHTML = "Enter any Value";
    }
    else {
        convertTapmatra = (deyaTapmatraMan - 32) * 5 / 9;
        jekaneResultBosbe.innerHTML = convertTapmatra;

    }
})

// profite calculation
var amount = document.querySelector("#amount");
var profite = document.querySelector("#profite");
var profiteBtn = document.querySelector("#profiteBtn");

profiteBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var userAmount = parseInt(amount.value);
    if (amount.value == "") {
        profite.innerHTML = "Enter Amout";
    }
    else {
        var userProfite = userAmount * 10 / 100;
        profite.innerHTML = userProfite;
    }
})

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
