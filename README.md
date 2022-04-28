# Mixed Messages Read Me

# Overview

Mixed Messages is a portfolio project from Codecademy's course. This application generates a message based on the user input of birth year, day and day.

It will inform the users their Chinese Zodiac Animal (based on the converted Chinese Lunar year) and Astrology Star Sign.

Open the .html file in your web browser and enjoy!

## Table of contents

- [General info](#general-info)
- [Project-Objectives](#project-objectives)
- [How to Use this Program](#How-to-Use-this-Program)
- [Development Status](#development-status)
- [Contact](#contact)

## General info

A star sign reason generator application that produce a new message based on reason at least three different pieces of data. This is part of a portfolio project from on [Codecademy](https://www.codecademy.com) Full-Stack and Back-End Developer course.

The application is designed and written using HTML & JavaScript.

The application converts Gregorian Calendar Dates to the Chinese Lunar Calendar Dates and outputs the Zodiac Animal based on the Chinese Lunar year, while giving the Astrological sign based on the Gregorian Calender dates.

## Project-Objectives

### Building a mixed message project using:

- JavaScript
- Using Git version control.
- Using command line.
- Node.js
- HTML
- jQuery, Moment.js and Date Range Picker's library

#### Prerequisites:

- JavaScript
- Node.js
- NPM package: [live-server](https://www.npmjs.com/package/live-server)
- Command line

## How-to-Use-this-Program:

**NOTE:**

- Make sure you have Node.js installed with the live-server package

1. Download the HTML file from this GitHub repositary
2. Open or 'cd' via terminal / command line of this project folder
3. type in terminal or command line
   `live-server --port=1234 --open=public --entry-file=index.html`
   It should automatically open your default broswer to the index.html file. If not, go to `localhost:1234` in the broswer
4. Pick your birth year, month and year
5. Hit Apply
6. Click on "SHOW ME BELOW" button

## Development-Status

- Stage 1: JavaScript logic
  1. [x] Date picker
  2. [x] Zodiac animal & sign matching logic
  3. [x] Lunar calendar convertor, only supports conversion from the years 1921 to 2020
- Stage 2: HTML front-end
  1. [x] Split code into ES6 modules
- Stage 3: Customized Messages (current stage)
  1. [x] Refector calendar form
  2. [x] Test submission logic
- Stage 4: Re-design front-end
  1. [] Design page layout
  2. [] Add CSS stylesheet
  3. [] Add footer
- Stage 5: Deploy on Server

## Bug and Error Journal

- Issue: page would reload on button click/form submission. Had to stop making form reload the page after btn click event by adding event.preventDefault() to the function expression of the 2nd parameter of the event listener;
