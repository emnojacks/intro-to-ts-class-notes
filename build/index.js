"use strict";
console.log("greetings");
//count is  oftype number
let count = 5;
console.log(count);
//const type is a literal 
const fname = 'emj';
console.log(fname);
//test creates a var oftype 'any'
// let test;
let test;
//avoid create ofType 'any' bc it can cause errors
//it doesnt like assignig a string to a number
// test = "emj"
function add(x, y) {
    let result = x + y;
    return result;
}
//create an instance of the type 
//creating a var object 
let student = {
    fname: "andy",
    lname: "anderson",
    grade: 12
};
function toString(student) {
    //: {
    //     fname: string
    //     lname: string
    //     grade: number
    // }) {
    return JSON.stringify(student);
}
console.log(toString(student));
//another type is 'void' and its null 
//tuples 
// function sendMessage(): [status: string, message: string] {
// return ["success", "your data"]
// }
//this compound type is a tuple
const [statusResult, data] = sendMessage();
//tuple
function sendMessage() {
    return ["success", {
            fname: "Justin",
            lname: "Toddy",
            grade: 12
        }];
}
//structural typing vs required typing
//expression 
let sqr = (x) => x * x;
