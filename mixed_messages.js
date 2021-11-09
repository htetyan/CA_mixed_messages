//mixed messages javascript file
//nodejs console app
//input: 3 data points
//output: random message


//Variables for inputs

let name = "";
let yearOfBirth = 0;
let mood = 0;

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

//Logic

//function: myAnimal
//input year of birth and output zodiac animal
//number -> string

function myAnimal(yearOfBirth) {

    let animalName = "";

    for (let i=0; i < animalYears.length; i++ ) {
        let obj = animalYears[i];
        let indi = [];
        Object.values(obj).forEach(val => { indi = val});

        //true of false from includes
        //console.log(indi.includes(yearofBirth));

        //need to find the element here and store it's key location
        if (indi.includes(yearOfBirth)) {
            animalName = Object.getOwnPropertyNames(obj);
        }      
    }
    return animalName;

}

console.log(myAnimal(1967));