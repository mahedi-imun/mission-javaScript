/* ?. ?????? ???? ????? ????? ???? ????? ??? ??? feetToInch
 ??? ?? ????? ????? ?????? ???? feet ?? ??????? ???? inch ? 
?????? ?? ??????? ??? ???? ??? ??? ???? ?? ??????? ?????? ??? ???? ?? ????? ???  */

function feetToInch(feet){
    let inch =  feet * 12 ;
    return inch;
}
let inch = feetToInch(1)
// console.log(inch,"inch")

/* ?. ???? ????? ?? ??? ????? centimeterToMeter ??? ???? ???? ????? ??????
 ?? ?????? ????? ?????? ??? ??????????? ???? ?? ??? ??????????? ?? ?????
  ? ??????? ??? ??????? ??????? ?????  */
function centimeterTomiter(centimeter){
    let meter = centimeter * 0.01;
    return meter;
}
let meter = centimeterTomiter(200);
// console.log(meter , 'meter')

/* ?. ?????? ????? ????? ????? ??? ?????? ??? ??????? ??? ??? 
paperRequirements ?? ??????? ??????????? ?????? ????? ??????????? ????
????? ??????????? ??? ???? ????? ?? ?? ??? ?????? ???? ??????? ???????????
 ??? ???? ??????? ?? ?? ??? ?????? ???? ?? ????? ??????????? ??? ???? 
 ????? ?? ?? ??? ?????? ???? ?????? ??? ?? ?? ?? ??? ?????? ??? 
 ????? ??????????? ?????? ????? 
????? ???? ??? ????? ???? 
????? ?? ??????? ???? ?????? ????? ??? ?? 
??????? ?? ??????? ???? ?????? ????? ??? ?? 
????? ?? ??????? ???? ?????? ????? ??? ?? 

??? ????? ??? ????? paperRequirements ???? ????? ???? ???? ????? 
??? ??????? ?? ??? ??? ?? ?? ?? ??? ????? ??? ???? ??????????? ??????? 
?? ????? ????? ??? ??? ???? ????? ??????? ???????? ???? ?????? 
????? ?????? ?????? ??????? ?????  */

function paperRequirements (book1,book2,book3){
    let book1Page = 100 * book1;
    let book2page = 200 * book2;
    let book3Page = 300 * book3;
    let totalPages = book1Page + book2page+book3Page;
    return totalPages;
}
let totalPages = paperRequirements(4,3,7);
 console.log(totalPages,"total pages");

/* ?. ???? ????? ?????? ?? ??????? ??? ??? bestFriend ????? ??? ?????? 
????? ??????????? ?????? ???? array ????? ??? array ?? ????? ????? ?? ????????? ??? ?????? 
??? ????? ??? ????? ?? ??????? ?? ??? ?????? ?? ??? ??????? ?? ??? ??????? ??? ????? 
?? ???????? ???? ????? ?????? ????????? ??? (???????) ??????? ???? ???? 
 */
function names(names) {
    let bigname = [0];
    for(let i =0 ;i < names.length;i++){
        if(names[i].length > bigname.length ){
        bigname =names[i];   
        }
    }
    return bigname; 
}
let allNames= ['kgkgfhjkfhkj ','jamal','dam','md kalam','romal uddin'];
let bigestString= names(allNames);
// console.log(bigestString)

/* ?. ???? ???? ?????? ??? ????? ???? array ?? ????? ???????? ?????? ?????? 
????? ??? ????? ?????? ???? ????? ?? ???? ??? ??? ????
 ??? ?????? ???? ??? ?????? ?????? ???
  ?????? ????? ?? ??????? ????? ?? ?? ????? ???????? ??? ???? 
  array ?? ????? ?????? ?? ??? ??????? ?????? ??? ????? ????? ???? ??? ?????
   ??? ??? ???? ???? ?? 
??????? ?????? ?????? ?????? ????? ????? ?????? ??????? ??? ?????  */

function stopNegative (numbers){
    let uique = 0;

    for(let i =0; i< numbers.length ;i++){
        if ( numbers.length < 0  ){
           console.log(uique)
        }
    }
 
}
let numbers = [54,65,566,0,-5,53];
let num = stopNegative(numbers);