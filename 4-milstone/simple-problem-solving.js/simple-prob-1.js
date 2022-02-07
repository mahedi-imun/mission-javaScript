//1.write a loop , output 1 to 100 numbers.

// for (let i= 1; i <=100 ; i++ ){
//     console.log(i)
// }

//addition three numbers
// function additionThreeNum(num1,num2,num3){
//     let addition = num1 + num2 + num3;
//     return addition;
// }
// addition= additionThreeNum(10,10,20);
// console.log(addition)

// celsius to fahrenheit 

function celsiusToFahrenheit( celsius){
    let  fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}
let myCelsius= 1;
let celsius = celsiusToFahrenheit(myCelsius) ;
console.log(celsius,"fahrenheit"); 

// /fahrenheit  to celsius 
function fahrenheitToCelsius (fahrenheit){
    let celsius = fahrenheit - 32;
    let newCelsius= celsius * 5/9;
    return newCelsius;
}

let MyFahrenheit = 100;
let newCelsius = fahrenheitToCelsius(MyFahrenheit);
console.log(newCelsius ,"celsius"); 

// bangladesh education marks
function grade (num){
    if ( num > 100  ){
        console.log("your number is wrong")
    }

    else if( num >=80 && num<=100){
        console.log("A+")
    }
    else if( num >=70 && num<=79){
        console.log("A")
    }
    else if( num >=60 && num<=69){
        console.log("A-")
    }
    else if( num >=50 && num<=59){
        console.log("B")
    }
    else if( num >=40 && num<=49){
        console.log("C")
    }
    else if( num >=33 && num<=39){
        console.log("D")
    }
    else if(num <= 32){
        console.log("F")
    }

    else{
        console.log("enter your number")
    }
}
grade(88);

// simple interest is javaScript

function interest(principal, rate,year){
    let interestRate = principal * rate * year /100;
    return interestRate;
}
let myPrincipal = 10000;
let myRate = 6.60;
let myYear =1;
let interestRate = interest(myPrincipal,myRate,myYear);
console.log(interestRate,"total interest per year");


// check vowel word in function

function vowel(words){
    let word = words.toLowerCase()
    if (word== "a" || word == "e" || word == "i" || word == "o" || word == "u"){
        console.log(words + " is vowel")
    }
    else  {
        console.log( words +" is consonant")
    }
}
vowel("m")

// find a big Number

function bigNumber(num1, num2,num3){
    if (num1 > num2 && num1 > num3){
        console.log("yes number 1 is this big "+ num1)
    }
    else if( num2 >num1 && num2 >num3){
        console.log("yes number 2 is the big "+ num2)
    }
    else{
        console.log("yes number 3 is the big " + num3)
    }
}
bigNumber(14444,555653,88)

// find 1 to 100 even Number 

function evenNumber(num){
    if (num % 2 == 0){
        console.log("i am even number")
    }
    else{
        console.log("iam odd number")
    }
}
evenNumber(5)

// find 1 to 100 odd number 

function oddNumber(num){
    if (num % 2 == 1){
        console.log("iam odd number")

    }
    else{
        console.log("iam even number")
    }
}
oddNumber(32)

function namta(num){
    for (let i =1;  i <= 10 ; i++ ){
        let result = num * i;
        console.log(num + " * " + i + " = "  + result)
    }
}
namta(11)