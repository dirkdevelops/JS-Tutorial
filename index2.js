// Lesson 5.10 - Undefined, Null, NaN

let name;

console.log(name);

// undefined means no value

let user = {
    name: 'Aaron',

};

console.log(user.age);

// Null - explicitly set

let newuser = {
    name: 'Aaron',
    age: null ,
    ccnum : null,
};

console.log(user.ccnum); 

// tells person reading code that we do not know when we use null

// NaN (not a number) , arises from an error

console.log(user.age); //undefined
console.log(10 + user.age); //NaN because it is undefined

// Lesson 5.11 - Truthy and Falsy, chaining and scope

let num = []

// null, undefined and nan will be falsy, emptry string is falsy, 0 is falsy
// empty array or object will be truthy
// let num = [].length; is falsy

if (num) {
    console.log ('this was true');
}

else {
    console.log('this was false');
}

// Lesson 5.12 - Conditional Chaining

// conditional && (AND) Operator --> it tests if first and second statments are true and if they both true then it evaluate both as true


let number = 0;
let firstName = "Aaron";

let numbAndName = number === 0 && firstName === "Aaron";

if (numbAndName ) {
    console.log ('this was true');
}

else {
    console.log('this was false');
}

// Conditional || (OR) Operator
//  can also chain things together


let number = 0;
let firstName = "Aaron";
let lastname = "Jack";

let numbAndName = number === 0 || firstName === "Aaron" || lastname === "Jack";

if (numbAndName ) {
    console.log ('this was true');
}

else {
    console.log('this was false');
}


// combining with truthy and falsy




let number = 0;
let firstName = "Aaron";
let lastname = "Jack";


if ( firstName && numbAndName ) {
    console.log ('this was true');
}

else {
    console.log('this was false');
}

// as long as firstname is not undefined and our number is 0 then true

// Equivalence

// === evaluates to true if the two statements are equal

// !== evaluates to true if the two statements are not equal

 

// Comparison

// && evaluates to true if both statements are true (or truthy)

// || evaluates to true if one or more statements are true (or truthy)

// ! "flips" truthy to false, and falsy to true

 

// Like normal math we can also use parentheses

// (true && true) || false

// Lesson 5.13 Scope

const firstName = "Aaron"
const lastName = "Jack"

if (firstName && lastName) {
    // create full name

    const fullName = `${firstName} ${lastName}`

}

console.log(fullName); // fullName is not defined because any variable created in the brackets of the if statement will not be available on the outer scope (our furthest level to the left)

const firstName = "Aaron"
const lastName = "Jack"

let fullName = "" or undefined

if (firstName && lastName) {
    // create full name
    
    fullName = `${firstName} ${lastName}`;

}

console.log(fullName); //Aaron Jack

// inner scopes have access to outside variables but not the other way around --> variables get passed down but not up the scope they are created in
// In general:

// - we enter a new scope inside the curly brackets { } of an if statement, a loop, or a function

// - think of each new scope as a "level" (sort of like HTML parents and children)

 

// When using let and const ONLY

// - a variable's scope is based on where it was declared (not assigned)

// - variables can be used on the same level, or in "child" scopes, but not "parent" scopes

 

// When using var

// The same rules apply, but only inside functions. 

// In other words, variables declared with var "escape" loops & if statements and are available everywhere.

 

// EXAMPLE

// if (true) { var firstName = "Aaron" }

// console.log( firstName );

// // would print "Aaron"

 

// if (true) { let lastName = "Jack" }

// console.log( lastName );

// // would print undefined

// Lesson 5.14 Type Detection & Conversion


// typeof it used to determine if it is a number or string

const myNum ="123";

if (typeof myNum === 'number'){
    console.log ('its a number');
} else if (typeof myNum === 'string') {
    console.log('its a string');
}

// cannot detect arrays with typeof must use Array.isArray

const myArr = [1,2,3];

console.log(Array.isArray(myArr));

if (Array.isArray(myArr)){
    console.log ('array?');
}

// detecting NaN

console.log(isNan(NaN));

// convert string to number

let myNum ="123";

if (typeof myNum !== 'number'){
    // convert to numbeer
    myNum = Number(myNum) // Number function 
    myNum = +myNum; // use the plus
}

console.log (typeof myNum, myNum); 
// type of tells you if it is a number and myNum prints 123


// convert number to string

let myNum =123;

if (typeof myNum !== 'string'){
    // convert to string
    myNum = String(123); //any number gets converted to a string
    myNum = myNum.toString(); //tostring function

}

console.log (typeof myNum, myNum); 

// convert to a boolean

let myNum =123;

myNum = Boolean (myNum); 

//can pass in any value a string or number  and it will give either true or false
// Boolean will convert any truthy value to true and any falsy value to false


console.log (typeof myNum, myNum); 