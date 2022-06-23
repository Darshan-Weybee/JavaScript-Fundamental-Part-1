console.log("=================Lecture: Values and Variables==============");

let country = "India";
let continent = "Asia";
let population = 135000000;

console.log(country, continent, population);

console.log("=================Lecture: Data Types==============");

const isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof population);

console.log("=================Lecture: let, const and var==============");

language = "Gujarati";
country = "America";

console.log(language, country);

console.log("=================Lecture: Basic Operators==============");

let halfPopulation = population/2;
console.log(halfPopulation);

population++;
console.log(population);

let ourPopulation = population > 6000000;
console.log(ourPopulation);

let averageCountry = 33000000 > population;
console.log(averageCountry);

let description = "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);

console.log("=================Lecture: Strings and Template Literals==============");

description = `Portugal is in Europe, and its 11 million people speak portuguese`;
console.log(description);

console.log("=================Lecture: Taking Decisions: if / else Statements==============");

if(population > 33000000){
    console.log("Portugal's population is above average");
}
else
    console.log("Portugal's population is "+ (population+(population-33))/2 +" below average");

population = 13;
if(population > 33000000){
    console.log("Portugal's population is above average");
}
else
    console.log("Portugal's population is "+ (population+(population-33))/2 +" below average");

population = 130;
if(population > 33000000){
    console.log("Portugal's population is above average");
}
else
    console.log("Portugal's population is "+ (population+(population-33))/2 +" below average");

population = 135000000;
console.log(population);

console.log("=================Lecture: Type Conversion and Coercion==============");

let x1 = '9' - '5';
let x2 = '19' - '13' + '17';
let x3 = '19' - '13' + 17;
let x4 = '123' < 57;
let x5 = 5 + 6 + '4' + 9 - 4 - 2;

console.log(x1); 
console.log(x2); 
console.log(x3);    
console.log(x4);    
console.log(x5);

console.log("=================Lecture: Equality Operators: == vs. ===  ==============");

// let numNeighbours = prompt('How many neighbour countries does your country have?');

// if(numNeighbours == 1)
//         console.log("Only 1 Border!");
// else if(numNeighbours > 1)
//         console.log("More than 1 border");
// else
//     console.log("No Border");

// if(numNeighbours === 1)
//     console.log("Only 1 Border!");
// else if(numNeighbours > 1)
//     console.log("More than 1 border");
// else
// console.log("No Border");

// if(Number(numNeighbours) === 1)
//     console.log("Only 1 Border!");
// else if(numNeighbours > 1)
//     console.log("More than 1 border");
// else
// console.log("No Border");

console.log("=================Lecture: Logical Operators==============");

let countryLanguage = "English";
let countryPopulation = 40000000;
let countryIsIsland = false;

if(countryLanguage == "English" && countryPopulation < 50000000 && !countryIsIsland)
    console.log("You should live in Portugal :)");
else
    console.log("Portugal does not meet your criteria :(");

console.log("=================Lecture: The switch Statement==============");

let myLanguage = "english";

switch(myLanguage){
    case "chinese":
    case "mandarin": console.log("MOST number of native speakers!");
    break;

    case "spanish": console.log("2nd place in number of native speakers");
    break;
    
    case "english": console.log("3rd place");
    break;
    
    case "hindi": console.log("Number 4");
    break;
    
    case "arabic": console.log("5th most spoken language");
    break;

    default: console.log("Great language too :D");      
}

console.log("=================Lecture: The Conditional (Ternary) Operator==============");

let result = (population>33000000) ? "Portugal's population is above average" : "Portugal's population is below average"
console.log(result);

population = 13;
result = (population>33000000) ? "Portugal's population is above average" : "Portugal's population is below average"
console.log(result);

population = 130;
result = (population>33000000) ? "Portugal's population is above average" : "Portugal's population is below average"
console.log(result);

population = 135000000;