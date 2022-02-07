//1.write a loop , output 1 to 100 numbers.
// for (let i =1; i <=100 ; i++){
//     console.log(i)
// }

//write a function addition three numbers
/* function sumNum(num1,num2,num3){
    let num = num1+ num2 + num3;
    return num;
}
let sumTotal = sumNum(23,1,1)
console.log(sumTotal) */

// celsius to fahrenheit 
/* function celsiusToFahrenheit(celsius){
    let fahrenheit = celsius* 9/5+32;
    return fahrenheit;
}
let myCelsius= 34;
let fahrenheit= celsiusToFahrenheit(myCelsius);
console.log(fahrenheit," fahrenheit") */

// Fahrenheit to celsius
function fToc(f){
    let celsius = f - 32 
    celsius = celsius*5/9 ;
    return celsius;
}

let myC = 34;
let c=fToc(myC)
console.log(c ,"celsius")