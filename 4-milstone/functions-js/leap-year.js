function leapYear (year){
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0) ) {
        return true;
    }
    else{
        return false;
    }
}

const myYear = 2000;
const yearLeapYear = leapYear(myYear);
console.log("my year lep year ", yearLeapYear);

