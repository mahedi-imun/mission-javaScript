/* ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।  */

const bangladesh = {
    name:'bangladesh',
    id:1971,
    language:'bangle',
    peoples:'160 milion',
    division:['dhaka','chittagong','khulna'],
    district:{
        name:'Lakshmipur',
        id:1237,
        upozila:['ramgonj','ramgoti','raipur']
    },
    getMoney:function(){
        return this.id
    }
}
// console.log(bangladesh.getMoney())
/* একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো।
 সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা 
 প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
 এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড 
 অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি 
হবে যে প্রপার্টি এর মান একটা array 
সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। 
আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।  */

const string = `
    ${bangladesh.name} ,
     ${bangladesh.division[1]}, 
    ${bangladesh.district.name}
`;
// console.log(string)

/* ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে।  */
 const number = ()=> 89
//  console.log(number(number))
/* ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।  */

const numbers = (num)=> num/7;
// console.log(numbers(14))
/* ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।  */

const number1 = (num1,num2)=>(num1 + num2) * 2
// console.log(number1(5,5))

/* ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। */

const sum = (num1,num2)=>{
    const sumTotla= (num1+7) +(num2+7)
    return sumTotla
}
// console.log(sum(10,10))
/* ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  */
const numofArray = [21,34,24,432,3344,53442,5342,523,234];
const newArry=numofArray.map(newArry => newArry/7)
// console.log(newArry)

/* ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
---------------------------------
map: map return sumthing,and give another array
forEach : dont return , if dont need return use foreach
filter:checked conditions and give new element if dont have any element , filter give empty object
find:checked condition and just give an array of element.
if dont have elemnt ,  find give undefined 
=================================
*/
/* ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে। */

const bangladeshi = {
    name:'bangladesh',
    id:1971,
    language:'bangle',
    peoples:'160 milion',
}

const {name,id, language} = bangladeshi;
// console.log(name,id)

const [ ,balance] = [234,32425,234,234]
console.log(balance)