console.log("=================coding_challange_1_2==============");

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight**2;
console.log(markBMI);
let johnBMI = johnMass / johnHeight**2;
console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
}else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / markHeight**2;
console.log(markBMI);
johnBMI = johnMass / johnHeight**2;
console.log(johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
}else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

