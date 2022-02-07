// inches to fit
function incToFit (inches){
    var fit = inches / 12;
    return fit;
};
var myInches = 122;
var fit = incToFit(myInches);
// console.log(fit, "fit");

// var dadiInches = 177;
// var fit = incToFit(dadiInches);
// console.log(fit , "fit");

// fit to inches
// function fitToInches (fit){
//     var inches = fit * 12;
//     return inches;
// }
// var myFit = 67;
// var inches = fitToInches(myFit);
// console.log(inches, "my inches");

// km to miles
function kmToMiles (km){
    var km = km * 0.621371;
    return km;
}

var miles = kmToMiles(1);
console.log(miles);

// miles to km
// function milesTokm(miles){
//     var miles = 1.60934 * miles ;
//     return miles;
// }


var myMiles =10;
var miles = milesTokm(myMiles);
console.log(miles);
