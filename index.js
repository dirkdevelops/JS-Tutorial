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
const myFriendsMoney = 200 + 20; // primitive data type
const totalMoney= myMoney + myFriendsMoney;
console.log(totalMoney);

//remainder/modulo
const change = totalMoney % 100;
// % gives you the remainder not the result

console.log(change);

// booleans

const iHaveMoreMoney = myMoney < myFriendsMoney;
// making a comparison here, result of expression is a boolean which is a true or false, true or false is always lowercase, can put true or false in a const or let
// comparions operators > < >= <= === (triple equal to assert equality)
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