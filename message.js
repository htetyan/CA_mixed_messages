//Import

import { constellationCal } from "./constellation.js";
import { myAnimal } from "./myAnimal.js";
import { lunarConvert } from "./lunar.js";
import { months as ranMonths } from "./YearMonths.js";
// import { logYear, logMonth, logDay } from "./datePicker.js";

//Variables, 3 data points: year, month and day

var yearSelect = document.querySelector("#year");
var monthSelect = document.querySelector("#month");
var daySelect = document.querySelector("#day");
let yearPicked = 1995;
let monthPicked = 10;
let dayPicked = 24;
//Date picker code:

// $(function () {
//   $('input[name="birthday"]').daterangepicker(
//     {
//       singleDatePicker: true,
//       showDropdowns: true,
//       minYear: 1921,
//       maxYear: 2020,
//     },
//     function (start, end, label) {
//       //Template instruction set for difference between now and chosen year
//       //var years = moment().diff(start, 'years');
//       //alert("You are " + years + " years old!");
//
//       //Output of chosen year and month picked
//       yearPicked = Number(end.format("YYYY"));
//       monthPicked = Number(end.format("MM"));
//       dayPicked = Number(end.format("DD"));
//
//       //monthPicked = Number(monthPicked);
//       //alert(monthPicked);
//     }
//   );
// });
//

//New Date Picker logic:
let btn = document.getElementById("btn-2");

function myLog(event) {
  event.preventDefault();

  //Output of chosen year and month picked
  yearPicked = Number(yearSelect.value);
  monthPicked = Number(monthSelect.value);
  dayPicked = Number(daySelect.value);

  console.log(yearSelect.value);
  console.log(monthSelect.value);
  console.log(daySelect.value);

  console.log(myMessage());
  return `${yearSelect.value}, ${monthSelect.value}, ${daySelect.value}`;
}

//My messages

function myMessage() {
  let animalMsg = myAnimal(lunarConvert(yearPicked, monthPicked, dayPicked));

  let randmonth = ranMonths.filter(
    (month) => month === ranMonths[monthPicked - 1]
  );

  let constellationMsg = constellationCal(monthPicked, dayPicked);

  console.log(
    `At the time of your birth in ${randmonth} ${yearPicked}, approximately ${
      2022 - yearPicked
    } years ago. The occurrence of this very spectacular event, caused you to be a ${animalMsg}. At the same time, the Sun was inside of the constellation of ${constellationMsg}!!`
  );

  return `At the time of your birth in ${randmonth} ${yearPicked}, approximately ${
    2022 - yearPicked
  } years ago. The occurrence of this very spectacular event, caused you to be a ${animalMsg}. At the same time, the Sun was inside of the constellation of ${constellationMsg}!!`;
}

//Console-logging the message
myMessage();
btn.addEventListener("click", myLog);

//Manipulating the DOM element to write the message
// let resEle = document.getElementById("result");
//
// document.getElementById("Btn").addEventListener("click", () => {
//   resEle.innerHTML = myMessage();
// });

let res2 = document.getElementById("result2");

document.getElementById("btn-2").addEventListener("click", () => {
  res2.innerHTML = myMessage();
});

// function myClick() {
//   return console.log(yearSelect.value);
// }
