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
