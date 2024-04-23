//Question no 1 to 7


// Literal Notation
let studentNames = [];

//Object Notation
let stdNames = [{}];

//String Array
let fruits = ['banana' , 'apple' , 'orange'];

//Number Array
let num = [1,2,3,4,5];

//Boolean Array
let bool = [true , false , null , undefined];

//Mixed Array 
let arr = ['banana', 1 , true ,"apple"];


let educationQualification = ['SSC','HSC' ,'BCS','BS','BCOM','MS','M.Phil','PhD']

//Question no 8


// Question no 9

//Input From User 
let colorName = prompt("Enter Color Names");

//Intialize Array
let color = []


//Add Item in start
color.unshift(colorName,"red" , "blue")
//Print Array
console.log(color)


//Add Item in last 
color.push(colorName)
//Print Array
console.log(color)


//Add Two Item in start
color.unshift("pink" , "voilet")
//Print Array
console.log(color)


//Remove Item From Last
color.pop()
//Print Array
console.log(color)


//Question no 10

let number = [320 , 230 , 480 , 120]

//Sorted Array in Ascending
number.sort();
//Print Sorted Array
console.log(number)


//Question no 11

let cities = ['Karachi' , 'Hyderabad' , 'Lahore' , 'Islamabad' , 'Quetta']
console.log(cities);

let selectedCities = cities.splice(0,2)
console.log(selectedCities);

//Question no 12

let array = ["This", "is", "my", "cat"];
console.log(array);
let newArr = array.join(" ");
console.log(newArr);