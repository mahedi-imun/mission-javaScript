/* let number =[11,34,66,77,77,543,5434,354746,323,66,];
let sum =0; 
for (let i = 0; i< number.length;i++){
    let element = number[i];
    sum= sum + element;
}
console.log(sum) */

function arraySum (num){
    let sum = 0;
    for( let i= 0; i < num.length;i++){
        let element = num[i];
        sum = sum+element;
    }
    return sum;
}
let totalArray =arraySum([23,3,3]);
console.log(totalArray)