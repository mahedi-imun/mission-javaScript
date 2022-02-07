// create a function take 3 number , and the function return biggest number

/* function biggestNumber (num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return num1;
    }
    else if ( num2 > num3 && num2 > num1){
        return num2;
    }
    else{
        return num3;
    }
}
let biggest=  biggestNumber ( 2662,6666434,46665);
console.log(biggest); */

// creat a function take three value return small value 

function smallNumber (num1, num2, num3,){
    if (num1 < num2 && num1 < num3){
        return num1;
    }
    else if ( num2 < num1 && num2 < num3){
        return num2;
    }
    else{
        return num3;
    }
}
let small = smallNumber( 23,3,443);
console.log(small)