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