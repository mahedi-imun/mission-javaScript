var laptop ={
    name:"asus",
    ram:"16gb",
    color:"blue"
}
laptop.ram = '32gb'; // add object propatise value
laptop["color"] = "red"; // add another way to set value
var newName ="name"; // add another way to set new value
laptop[newName] = "hp";
console.log(laptop);