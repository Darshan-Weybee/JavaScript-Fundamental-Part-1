console.log("=================coding_challange_3==============");

let dolphin = (96+108+89)/3;
let kolas = (88+91+110)/3;

console.log("The average is" + dolphin);
console.log("The average is" + kolas);

if(dolphin>kolas)
        console.log("team dolphin is winner");
else if(kolas>dolphin)
        console.log("team kolas is winner");
else
        console.log("Draw between both the teams");


dolphin = (97+112+101)/3;
kolas = (109+95+123)/3;

console.log("The average is" + dolphin);
console.log("The average is" + kolas);

if(dolphin>kolas && dolphin >= 100)
        console.log("team dolphin is winner");
else if(kolas>dolphin && kolas >= 100)
        console.log("team kolas is winner");
else
        console.log("Draw between both the teams");

dolphin = (97+112+101)/3;
kolas = (109+95+106)/3;

console.log("The average is" + dolphin);
console.log("The average is" + kolas);

if(dolphin>kolas && dolphin >= 100)
        console.log("team dolphin is winner");
else if(kolas>dolphin && kolas >= 100)
        console.log("team kolas is winner");
else if(dolphin == kolas && dolphin>=100 && kolas>=100)
        console.log("Draw between both the teams");
else
        console.log("no team will win");

const day = "sunday";
switch(day){
    case "monday":console.log("plan 1");
    break;
    case "tuesday":console.log("plan 2");
    break;
    case "wednesday":console.log("plan 3");
    break;
    case "thursday":console.log("plan 4");
    break;
    case "friday":console.log("plan 5");
    break;
    case "saturday":
    case "sunday": console.log("weeekends");
    break;
    default: console.log("not a valid day");
}

