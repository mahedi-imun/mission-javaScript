

/* টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।  */
let name = 'anik'
const phone = {
    name: 'iphone',
    color:'black',
    price:"999$"
}
const  newName = ` mahedi ${name} ${phone.name}, ${phone.color}, ${phone.price}`;
console.log(newName) 
/* একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।  */

const divided = (num) => num/ 5 ;
const myNumber=divided(10)
console.log(myNumber);
/* 
তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো */
const sum = (num1,num2  ) => (num1+2)*(num2+2)
const result = sum(3,3)
 console.log(result)  


/*  এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।  */

const sum = (num1,num2,num3)=> num1*num2*num3;
const result = sum(2,2,2)
console.log(result)
/* ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  */

const numbers =[32,325,234,5423,5423,53];
const number = numbers.map(number => number *5)
console.log(number,numbers) 

/* ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো */

const numbers =[3,234,5235,4,4,3,2,55,334,333,66,77,88,99]
const odd = numbers.filter(x => x % 2 != 1 )
console.log(odd) 

/* ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।  */

const mobiles = [ 
    {name:'iphone3', color:'red',price:50300},
    {name:'iphone3', color:'red',price:53000},
    {name:'iphone5', color:'red',price:50300},
    {name:'iphone6', color:'red',price:5000},
    { name:'iphone4', color:'red',price:50030}
]
const myphone = mobiles.find(mobiles => mobiles.price == 5000)
console.log(myphone)

/* ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। */ 
const phone = 
    {
        name :'anik',
        age:23,
        hareColor : 'black'
    }
const { name, age , hareColor} = phone;
console.log(age ) 