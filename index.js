// Lesson 5.2: Variables
let num = 1;
let num2 = 2;
console.log(num)
num = 3;
console.log(num)
//  you are chaning num to 3 (the num at the bottom replaces let num on top)
console.log(num * num2)
// let vs const --> let allows you to change variable names but const does not//
// var acts like let//
// when choosing variables, it must be descriptive and if many words then no space and must capitalize the first letter of each word except the first word (camelCase), no single letter//

//Lesson 5.3 Numbers, booleans and conditionals
const myMoney = 300;
const myFriendsMoney = 200 + 20; // number, strings and booleans = primitive data type
const totalMoney= myMoney + myFriendsMoney;
console.log(totalMoney);

//remainder/modulo
const change = totalMoney % 100;
// % gives you the remainder not the result (essentially you want $100 bills with the $20 remaining)

console.log(change);

// booleans

const iHaveMoreMoney = myMoney > myFriendsMoney;
// making a comparison here, result of expression is a boolean which is a true or false, true or false is always lowercase and no '', can put true or false in a const or let
// comparions operators > , < , >= , <= , === (triple equal to assert equality)
console.log (iHaveMoreMoney);

if (iHaveMoreMoney) {
    console.log('Im rich')

}
// if i have more money i use curley brackets to run some code (blockstatement); since iHaveMoreMoney is false then the code will not run if it is true than it will run

if (myMoney < myFriendsMoney){
    console.log('Im not rich')
}

else if (myMoney === myFriendsMoney) {
    console.log ('Im doing okay')
}

else {
    console.log('Im rich')
}

// else or else if

// Lesson 5.4 - Numbers and Booleans Practice
const number = 300;

// print even if my money is even
// print odd if my money is odd

if (number % 2 === 0){
    console.log("The number is even.");
}

else {
    console.log("The number is odd.");
}

// even numbers are exactly divisble by 2 with a remainder of 0, so use remainder opeator 

// Lesson 5.5 Strings
let myName = 'Dirk';
let myMiddleName = "Dominic";
let myLastName = `Noyahr`;
// strings can be single quoates, double quotes, and the thing above the tab button

let myFriendsName = 'Peter'; //String interpolation with thing above tab button (backtick)
let myFriendsFullName = `${myFriendsName} Rogers`;
console.log(myFriendsFullName);

// Indexing
console.log(myName[0]);

// how you can get specific letters

// Interpolation
console.log(`${myName} ${myLastName}`);

// Concatenation
console.log(myName + ' ' + myMiddleName);

// String Method - measure the length
console.log(myName.length);


// testing strings (String equality boolean)
if (myName === 'Dirk'){
    console.log("I am Dirk");
}

else {
    console.log("I am not Dirk");
}

// Template Strings & Escaped Characters
var firstName = 'Dirk';

var helloString = `<h1> ${firstName} </h1>`;

// how to space something with a string
var paragraph5 = 'first paragraph \n second paragraph \n third paragraph';
// each \n is a new line and \t is a tab
console.log(paragraph5);

var paragraph4 = `
    first paragraph
    second paragraph
    third paragraph
    `;

console.log(paragraph4);
// another way of doing this

// writing HTML in JS

var paragraphs = `
    <div>
        <h1> Hello ${firstName} </h1>
        <p> I hope you are doing well</p>
    </div>

`;

console.log(paragraphs)

// can create dynamic HTML with variance in our code but do not forget backstroke

// Lesson 5.7 Arrays (compound data types)

const nums = [1,2,3];

// array properties

console.log(nums.length);
console.log(nums[0]);

//how to add to an array on a seperate line

nums.push(4);
console.log (nums);

//how to remove from an array on a seperate line
nums.pop(4);
console.log(nums);

// pop can remove the last stored item
const last = nums.pop ()
console.log(nums);
console.log(last); 

//how to edit array on different line

const newNums = [2,4,6,8];
newNums [0] = 0;
console.log(newNums);

// Lesson 5.8 - Objects

const name = "Dirk";
const age = 26;
const hasJob = true;
// can use objects because they all relate to one thing or in this case one person

const user = {
 name : "Dirk",
 age : 26,
 hasJob : true,
 socialMedia: {
     twitter:"dnoyahr",
     facebook: "dirknoyahr",
 }
};

// key : value; the value can be a string, boolean or number but it can arrays, others objects or functions

console.log(user);
// user. (name, age, hasJob, socialMedia) --> dot syntax

console.log(user['name']);
// String Literal Syntax

const key = 'name';
console.log(user[key]);
// making key equivalent to name and printing it (Variable Syntax)

// How to change object properties
console.log(user.age);
user.age = 27; //reassign the variables
console.log(user.age);

// How to add to object on different line
// user.title = define something
// user. title = array
// user.age --> can change the string
// user[key] --> can change the variable if key is the variable for 'age'
// user['age'] --> can change variable in string 

// const does not apply to compound data types so you can reassign each property but NOT the variable itself i.e. user

// how to get userobjects and chain things together

console.log(user.socialMedia.twitter);

// document is the most important object in JS, can access it on any webpage, it represents any webpage

// Lesson 5.9 - Value vs Reference

const users = [
    {
        name: "Aaron",
        age: 27,
        tags: ['new-user', 'javascript'],

    },

    { 
        name: "Phillip"
        age: 30,
        tags: ['javascript'],

    },

    {
        name:"Jan",
        age: 25,
        tags: [],

    },
];



// returns each user (in array) and each user is an object, we can add objects in  arrays and array in objects

// Value vs Reference

// by value assignment (all primitive) --> setting a variable to a value (string, number, boolean)

let a = 10;
let b = 'hi';
let c = a;
c = c + 10; //c = 11 and a =10 because you are setting a value not a reference; the 10 for c and the 10 for a are completely distinct values



// by reference --> objects and arrays

let a = 10;
let b = 'hi';
let c = [1,2];

// the value of c will not be [1,2] but rather a reference (a memory address) which will hold the value

let d = c;
// so both c and d will have the same value (a memory address) and it will be the same address for both

d.push(3) //we are adding 3 to our array and in doing this we will change the value of both c and d because they point to the same address

let a = 10;
let b = 'hi';
let c = [1,2];
let d = c;
d = [3,4,5];
// the value for c will be one memory address that holds [1,2] and the value for d will be another memory adress that holds [3,4,5]
// in this case we are only overriding the value of d and not changing anything in c, now if we update c or d it will not effect each other because they are completely different values

// Lesson 5.10 - Undefined, Null, NaN

