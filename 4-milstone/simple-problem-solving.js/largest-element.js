// /* function biggestAge(age){
//     let oldest = age[0];
//     for(let i= 0; i < age.length ; i++){
//         let element= age[i]
//         if(element > oldest){
//              oldest = element;
//         }
//     }
//     return oldest;
// }
// let allAge = [-4,-55,-23,-2,-245];
// let oldest = biggestAge(allAge)
// console.log(oldest) */


// // wright a function , take paramiter an array , find a biggest number

// /* function biggestNumber(age){
//     let biggestAge = 0;
//     for (let i = 0; i < age.length; i++){
//         let allAge= age[i];
//         if(  allAge > biggestAge){
//             biggestAge = allAge;
//         }
//     }
//     return biggestAge;
// }
// let age= [22,54,344,6,7,78];
// let myFriendAge = biggestNumber(age); 
// console.log(myFriendAge); */

// // white a function take array paramiter , find a small Number 

// /* function smallNum(num){
//     let smallNumber= num[0];
//     for(let i = 0; i < num.length; i++){
//         let element = num[i]
//         if( element < smallNumber){
//          smallNumber = element;
//         }
//     }
//     return smallNumber;
// }
// let myNumber = [34,34534,6573,5654,545,2454];
// let smallNumber = smallNum(myNumber);
// console.log(smallNumber)*/

// // একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।

// /* function sNum(num1,num2,num3){
//     if ( num1 < num2 && num1 < num3){
//         return num1
//     }
//     else if( num2 < num1 && num2 <num3){
//         return num2
//     }
//     else{
//         return num3
//     }
// }
// let small =sNum(34,45,53);
// console.log(small) */
// /* একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে।
//  সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া
//   array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। 
//   তারপর সেই গড় ফাংশনের রিটার্ন
//  হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।  */


//  function averageNum(numbers){
//      let average= numbers.length;
//      for(let i = 0; i < numbers.length;i++){
//          let element= numbers[i];
//          average = average+element ;
//           totalAverage = average / i;
//      }
//      return average;
//  }

//  let myNumber=[5,7,10];
//  let average =averageNum(myNumber);
//  console.log(totalAverage)
//  /* ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে 
//  একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর
//   area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

// ৫. কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে।
//  সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। 
//  দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।  */