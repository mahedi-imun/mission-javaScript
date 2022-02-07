// 1.white a three variable ( Numbber, string boolean).
/* let number = 23;
let sting = "mahedi";
let boolean = true; */

// 2. wite two variable , let , const ;
/* let  i = 123434;
const i = 3452356;
 */

//3. declare two variable , simple math operations +, -,*,/, % = total ;

/* function numTotal(num1,num2){
    let total = num1+num2;
    total= num1 - num2;
    total = num1 * num2;
    total = num1 / num2;
    total = num1 % num2;
    return  total;
}
let total = numTotal(2436343,34);
console.log(total) */


// 4. comparesion any number

// let x = 30;
// let y= 30;
// if(x == y){
//     console.log("value is equal")
// }
// else if ( x != y){
//     console.log("value is not equal")
// }
// else if ( x <= y){
//     console.log( "x is small")
// }
// else if ( x >= y ){
//     console.log("y is big ")
// }
// if ( x == y){
//     console.log ( "x and y is equal")
// }

//5. write two condition , case 1 two condition full fill,
// case 2 atlist fill one condition.


/* let x = 55;
let y = 555;
// if ( x >= y && x != y ){
//     console.log ("this condition full fil two condition  ")
// }
if ( y == x || y > x){
    console.log("yes , this condition fil minimum one condition ")
} */

// 6. use if and else
/* let  x= 150;
let y=  34;
if ( x > y){
    console.log("x is big");
}
else{
    console.log("y is big")
} */

//7 display 7 to 19 odd number;

// for ( let i  = 7; i <= 19; i++ ){
//     if( i % 2 ==1 )
//     console.log(i)
// }
/*  8. declear an array , number of position .
 update and change 4th element 
add or remove element . check write specifice 
value in the array ;*/

/* let names = [234,4523,3,5423,5,67,742,2365,232];
let index = names.indexOf(5423);
names.splice(index,1,444,111)
console .log(names); */

// 9.write a any for loop , display , element an array . 
/* let numbers =[ 33,4,55,33,344,33] ;{
    for (let element of numbers){
        console.log(element)
    }
} */

// 10.you have an array of numbers , you just display >80 numbers;

/* let numbers = [ 23,35,250 ,80,55,668,98,555,885,99,88,66,99,100];
for ( let element of numbers) {
    if (element >=  80) {
        console.log(element);
    }
} */

// 11 write a function take three numbers , multiplitions numbers. 
/*  unction numbersMultiplication(num1, num2, num3){
   let total = num1 *num2 *num3;
    return total;
}
let total = numbersMultiplication(1342626,4672,24667467472);
console.log(total) */

// 12 declear an aray and change any propaty

/* let phone = [
    {name1:'iphone', ram:16, },
    {name: 'samsung', ram:13}
];
for(let element of phone){
    if( element.name = element.name1)
    element.name1 = "oppo";
    console.log(element)
} */

// cheapest phone
let phones =[
    {name:'samsung s6',price : 53456},
    {name:'oppo f1',price : 46754},
    {name:'iphone 23pro ',price : 345230},
    {name:'xaiomi',price : 23542},
    {name:'sony',price : 54323},
    {name:'vivo',price : 6500},
    {name:'lenovo',price : 15000},
];
let = cheapest =phones[0];
for(let phone of phones){
    if(phone.price < cheapest.price){
        cheapest=phone
    }
    
}
console.log(cheapest);