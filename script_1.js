const ageMy = 15;
const isOldEnough = ageMy>=18;
if(ageMy>=18){
    console.log("you can start driving licence");
}
else{
    const yourself = 18-ageMy;
    console.log(`you are too young , wait another ${yourself} years`);
}

let century;
let birthYearMy = 1991;
if(birthYear <=2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);

const inputYear = '1991';
console.log(Number(inputYear) , inputYear);
console.log(Number(inputYear)+18);
console.log(String(23));

console.log("I am" + 23 + "old.");
console.log("23" - "10" -3);
console.log("23" / "2");

let n = "1" + 1;
n = n -1;
console.log(n);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(23));
console.log(Boolean(""));

const money = 10;
if(money){
    console.log("Don't spend it all.");
}else{
    console.log("You should get a job");
}

let height = 10;
if(height){
    console.log("Height is defined");
}else{
    console.log("Height is undefined");
}


const ageI = 18;
if(ageI === 18){
    console.log("You just became an adult");
}

const age1 = "18";
if(age1 == 18){
    console.log("You just became an adult");
}

// const fav = prompt("What's your fav. number");
// console.log(fav);
// console.log(typeof fav);

// if(fav == 23){
//     console.log("23 is an amazing number");
// }
// else if(fav == 7){
//     console.log("7 is an amazing number");
// }
// else{
//     console.log("not 23 and 7");
// }
// if(fav!=23){
//     console.log("why not 23?");
// }


const hasLicence = true;
const hasVision = true;
console.log(hasLicence && hasVision);
console.log(hasLicence || hasVision);
console.log(!hasLicence);

const shouldDrive = hasLicence && hasVision;
if(shouldDrive){
    console.log("HE/She can drive");
}else{
    console.log("other can drive");
}

const isTired = false;
console.log(hasLicence && hasVision && isTired);

if(hasLicence && hasVision && !isTired){
    console.log("HE/She can drive");
}else{
    console.log("other can drive");
}