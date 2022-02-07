// inches to feet 
function inchesToFeet (inches){
    let feet=  inches / 12;
    return feet;
}
let myInches = 55;
let feet = inchesToFeet(myInches);
console.log (feet);
// leap year check 
function leapYear (year){
    if(year % 4== 0){
        return true;
    }
    else{
        return false;
    }
}
let myYear = 2023;
let myLeapYear = leapYear(myYear);
console.log(myLeapYear);
//odd and even number check 
function OddOrEven (age){
    if (age % 2 == 0 ){
        return true;
    }
    return false;
}
var myAge =24;
let result = OddOrEven(myAge);
console.log(result);
// hour convert to minute 
function minuteToHour (hours){
    let minute = hours * 60;
    return minute;
}

let myHours = 4;
let minute = minuteToHour(myHours);
console.log(minute ,"minutes");