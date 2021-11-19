
//Variables, 3 data points: year, month and day

let yearPicked = 1995;
let monthPicked = 10;
let dayPicked = 24;
let animalName = "";


//Animal Years Array, Object

let animalYears = [
 {
     Rat: [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020]
 },
 {
     Ox: [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021]
 },
 {
     Tiger: [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022]
 },
 {
     Rabbit: [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023]
 },
 {
     Dragon: [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024]
 },
 {
     Snake: [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025]
 },
 {
     Horse: [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026]
 },
 {
     Sheep: [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027]
 },
 {
     Monkey: [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028]
 },
 {
     Rooster: [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029]
 },
 {
     Dog: [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030]
 },
 {
     Pig: [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031]
 }
 ];


//Months

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//LunarDate Object

let LunarDate = {
 madd: new Array(0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334),
 HsString: '甲乙丙丁戊己庚辛壬癸', //Lunar Year
 EbString: '子丑寅卯辰巳午未申酉戌亥',//Time of day
 NumString: "一二三四五六七八九十",
 MonString: "正二三四五六七八九十冬腊",
 CalendarData: new Array(0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95),
 Year: null,
 Month: null,
 Day: null,
 TheDate: null,
 GetBit: function(m, n) {
   return (m >> n) & 1;
 },
 e2c: function() {
   this.TheDate = (arguments.length != 3) ? new Date() : new Date(arguments[0], arguments[1], arguments[2]);
   var total, m, n, k;
   var isEnd = false;
   var tmp = this.TheDate.getFullYear();
   total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + this.madd[this.TheDate.getMonth()] + this.TheDate.getDate() - 38;
   if (this.TheDate.getYear() % 4 == 0 && this.TheDate.getMonth() > 1) {
     total++;
   }
   for (m = 0;; m++) {
     k = (this.CalendarData[m] < 0xfff) ? 11 : 12;
     for (n = k; n >= 0; n--) {
       if (total <= 29 + this.GetBit(this.CalendarData[m], n)) {
         isEnd = true;
         break;
       }
       total = total - 29 - this.GetBit(this.CalendarData[m], n);
     }
     if (isEnd)
       break;
   }
   this.Year = 1921 + m;
   this.Month = k - n + 1;
   this.Day = total;
   if (k == 12) {
     if (this.Month == Math.floor(this.CalendarData[m] / 0x10000) + 1) {
       this.Month = 1 - this.Month;
     }
     if (this.Month > Math.floor(this.CalendarData[m] / 0x10000) + 1) {
       this.Month--;
     }
   }
 },
 GetcDateString: function() {
   var tmp = "";
   tmp += this.HsString.charAt((this.Year - 4) % 10);
   tmp += this.EbString.charAt((this.Year - 4) % 12);
   tmp += "年 ";
   if (this.Month < 1) {
     tmp += "(闰)";
     tmp += this.MonString.charAt(-this.Month - 1);
   } else {
     tmp += this.MonString.charAt(this.Month - 1);
   }
   tmp += "月";
   tmp += (this.Day < 11) ? "初" : ((this.Day < 20) ? "十" : ((this.Day < 30) ? "廿" : "三十"));
   if (this.Day % 10 != 0 || this.Day == 10) {
     tmp += this.NumString.charAt((this.Day - 1) % 10);
   }
   return tmp;
 },
 GetLunarDay: function(solarYear, solarMonth, solarDay) {
   if (solarYear < 1921 || solarYear > 2020) {
     return "";
   } else {
     solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11;
     this.e2c(solarYear, solarMonth, solarDay);
     return this.GetcDateString();
   }
 }
};

//lunarConvert Function

function lunarCovert(calYear, calMonth, calDay) {
 LunarDate.GetLunarDay(calYear, calMonth, calDay);
 let myLunarYear = LunarDate.Year;
 return myLunarYear;
}

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

//function: myAnimal
//input year of birth and output zodiac animal
//number -> string

console.log(typeof yearPicked);
console.log(yearPicked);
console.log(typeof monthPicked);
console.log(monthPicked);
console.log(typeof dayPicked);
console.log(dayPicked);

function myAnimal(num) {

 for (let i=0; i < animalYears.length; i++ ) {
     let obj = animalYears[i];
     let indi = [];
     Object.values(obj).forEach(val => { indi = val});

 //true of false from includes
 //console.log(indi.includes(yearofBirth));

 //need to find the element here and store it's key location
     if (indi.includes(num)) {
         animalName = Object.getOwnPropertyNames(obj);
     }      
 }
 return animalName;
}

console.log(myAnimal(yearPicked));

function randMessage(){

    myAnimal(lunarCovert(yearPicked, monthPicked, dayPicked));

    const constellations = ['Capricornus', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', ' Scorpius / Ophiuchus', 'Sagittarius']
   
    let randmonth = months.filter(month => month === months[monthPicked-1]);

    //let randconstellation = constellations.filter(constellation => constellation === constellations[monthPicked-1]);

    let myConstellation = '';

    switch(true) {
      //Jan star signs, Capricorn
      case (monthPicked === 1 && dayPicked < 21):
        myConstellation = constellations[monthPicked-1];
        break;
      //Jan star signs, Aquarius
      case (monthPicked === 1 && !dayPicked < 21):
        myConstellation = constellations[monthPicked];
        break;
      //Feb star signs, Aquarius
      case (monthPicked === 2 && dayPicked < 19):
        myConstellation = constellations[monthPicked-1];
        break;
      //Feb star sign, Pisces
      case (monthPicked === 2 && !dayPicked < 19):
        myConstellation = constellations[monthPicked];
        break;
      //Mar star sign, Pisces
      case (monthPicked === 3 && dayPicked < 21):
        myConstellation = constellations[monthPicked-1];
        break;
      //Mar star sign, Aries
      case (monthPicked === 3 && !dayPicked < 21):
        myConstellation = constellations[monthPicked];
        break;
      //Apr star signs, Aries
      case (monthPicked === 4 && dayPicked < 20):
        myConstellation = constellations[monthPicked-1];
        break;
      //Apr star signs, Taurus
      case (monthPicked === 4 && !dayPicked < 20):
        myConstellation = constellations[monthPicked];
        break;
      //May star signs, Taurus
      case (monthPicked === 5 && dayPicked < 21):
        myConstellation = constellations[monthPicked-1];
        break;
      //May star sign, Gemini
      case (monthPicked === 5 && !dayPicked < 21):
        myConstellation = constellations[monthPicked];
        break;
      //Jun star sign, Gemini
      case (monthPicked === 6 && dayPicked < 23):
        myConstellation = constellations[monthPicked-1];
        break;
      //Jun star sign, Cancer
      case (monthPicked === 6 && !dayPicked < 23):
        myConstellation = constellations[monthPicked];
        break;
      //Jul star signs, Cancer
      case (monthPicked === 7 && dayPicked < 23):
        myConstellation = constellations[monthPicked-1];
        break;
      //Jul star signs, Leo
      case (monthPicked === 7 && !dayPicked < 23):
        myConstellation = constellations[monthPicked];
        break;
      //Aug star signs, Leo
      case (monthPicked === 8 && dayPicked < 23):
        myConstellation = constellations[monthPicked-1];
        break;
      //Aug star sign, Virgo
      case (monthPicked === 8 && !dayPicked < 23):
        myConstellation = constellations[monthPicked];
        break;
      //Sep star sign, Virgo
      case (monthPicked === 9 && dayPicked < 23):
        myConstellation = constellations[monthPicked-1];
        break;
      //Sep star sign, Libra
      case (monthPicked === 9 && !dayPicked < 23):
        myConstellation = constellations[monthPicked];
        break;
      //Oct star signs, Libra
      case (monthPicked === 10 && dayPicked < 23):
        myConstellation = constellations[monthPicked-1];
        break;
      //Oct star signs, Scorpio
      case (monthPicked === 10 && !dayPicked < 22):
        myConstellation = constellations[monthPicked];
        break;
      //Nov star signs, Scorpio
      case (monthPicked === 11 && dayPicked < 22):
        myConstellation = constellations[monthPicked-1];
        break;
      //Nov star sign, Sagittarius
      case (monthPicked === 11 && !dayPicked < 22):
        myConstellation = constellations[monthPicked];
        break;
      //Dec star sign, Sagittarius
      case (monthPicked === 12 && dayPicked < 22):
        myConstellation = constellations[monthPicked-1];
        break;
      //Dec star sign, Capricorn
      case (monthPicked === 12 && !dayPicked < 22):
        myConstellation = constellations[0];
        break;
      default:
        myConstellation = "Orion";
    };

    return `At the time of your birth in ${randmonth} ${yearPicked}, approximately ${2021 - yearPicked} years ago. The occurrence of this very spectacular event, caused you to be a ${animalName}. At the same time, the Sun was inside of the constellation of ${myConstellation}!!`
    };