//Import

import { constellationCal } from './constellation.js';
import { myAnimal } from './myAnimal.js';
import { lunarConvert } from './lunar.js';
import { months as ranMonths } from './YearMonths.js';

//Variables, 3 data points: year, month and day

let yearPicked = 1995;
let monthPicked = 10;
let dayPicked = 24;
//Date picker code:

$(function() {
$('input[name="birthday"]').daterangepicker({
 singleDatePicker: true,
 showDropdowns: true,
 minYear: 1921,
 maxYear: 2020,
}, function(start, end, label) {
 //Template instruction set for difference between now and chosen year
 //var years = moment().diff(start, 'years');
 //alert("You are " + years + " years old!");

 //Output of chosen year and month picked
  yearPicked = Number(end.format('YYYY'));
  monthPicked = Number(end.format('MM'));
  dayPicked = Number(end.format('DD'));

 //monthPicked = Number(monthPicked);
 //alert(monthPicked);
 });
});

function myMessage() {

    let animalMsg = myAnimal(lunarConvert(yearPicked, monthPicked, dayPicked));

    let randmonth = ranMonths.filter(month => month === ranMonths[monthPicked-1]);

    let constellationMsg = constellationCal(monthPicked, dayPicked);


    console.log(`At the time of your birth in ${randmonth} ${yearPicked}, approximately ${2022 - yearPicked} years ago. The occurrence of this very spectacular event, caused you to be a ${animalMsg}. At the same time, the Sun was inside of the constellation of ${constellationMsg}!!`);

    return `At the time of your birth in ${randmonth} ${yearPicked}, approximately ${2022 - yearPicked} years ago. The occurrence of this very spectacular event, caused you to be a ${animalMsg}. At the same time, the Sun was inside of the constellation of ${constellationMsg}!!`
    };

