// problem no 1 :ana to vori 
function anaToVori (ana){
    //error handle
    if (typeof ana != "number"){
        return"please enter a number"
    }
    // negative number error handle
    else if( ana <= 0){
        return" please enter a valid number"
    }
    else{
        let vori= ana / 16;
        return vori;
    }
}
let vori = anaToVori(321);
console.log(vori);

//problem no 2: panda cost
function pandaCost(singara,samucha,jilapi){
    //error handle
    if(typeof singara  != "number" || typeof samucha != "number" ||typeof jilapi != "number" ){
        return"please enter a number"
    }
    //negative number error handle
    else if(singara < 0 || samucha < 0 || jilapi < 0){
        return" please enter a valid number"
    }
    else {
        const singaraPrice= 7 * singara;
        const samuchaPrice = 10 * samucha;
        const jilapiPrice = 15 * jilapi;
        let totalPrice = singaraPrice + samuchaPrice + jilapiPrice;
        return totalPrice;
    }
}
let  totalPrice = pandaCost(1,1,1);
// console.log(totalPrice);

// problem no 3:picnic budget
function picnicBudget(people){
    let TotalPicnicCost;
    //error handle
    if (typeof people != "number"){
        return"please enter a number"
    }
    //first hundred people.
   else if( people <=100 ){
       TotalPicnicCost= people * 5000;
       return TotalPicnicCost;
    }
    //secund hundred people.
    else if (people > 100 && people <= 200) {
        let firstThanHundred = 100 * 5000;
        let secondHundred =  (people -100) * 4000;
        TotalPicnicCost =  firstThanHundred + secondHundred
        return TotalPicnicCost;
    }
    // greater than tow hundred people .
    else {
         firstThanHundred = 100 * 5000;
         secondHundred =  100 * 4000;
        let greaterThanTwoHundred = (people - 200) * 3000;
        TotalPicnicCost = firstThanHundred + secondHundred + greaterThanTwoHundred;
        return TotalPicnicCost;
    }
}
let TotalPicnicCost = picnicBudget(101);
console.log(TotalPicnicCost);

// problem no 4: odd friend 
function oddFriend(friends){
    // error handle
    if (typeof friends == "number"){
        return"please enter a valid friends names"
    }
    //odd friends calculations
    else{
        let myOddFriend = [0];
        for( let friend of friends){
                if(friend.length % 2 == 1){
                myOddFriend = friend;
                break;
            }  
        }
    return myOddFriend;
    }
}
    let friend = oddFriend(['Md jolil mia','qwwe','mofiz mia','kodom mia', 'ram','sam','judu','modhu']);
    console.log(friend);
