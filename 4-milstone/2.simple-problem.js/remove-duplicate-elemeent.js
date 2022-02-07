// let names = ['abul', 'babul','cabul', 'dabul','kabul','kabul', 'abul','cabul'];
// function removeDuplicate(names){
//     let unique =[];
//     for (let element of names){

//         if(unique.indexOf(element) == -1){
//             unique.push(element);
//         }
//     }
//     return unique;
// }
// let uniqueNames = removeDuplicate(names);
// console.log(uniqueNames)


let num = [234,54,532,233,556,33,55,234,54,33,344,556];
function removeDuplicateNum(numbers){
    let unique = [];
    for( let element of numbers){
        
        if( unique.indexOf(element) == -1){
            unique.push(element)
        }
    }
    return unique
}
let unique = removeDuplicateNum(num)
console.log(unique)