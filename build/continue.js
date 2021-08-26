"use strict";
//TYPE
//type allows us to add to the type system
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["yellow"] = 2] = "yellow"; //2
})(Color || (Color = {}));
function addTwoThings(x, y) {
    return x + y;
}
let z = addTwoThings(2, 5);
//GUARDS
//it doesn't like to uppercase something that could possibly be a number datatype
//so wrap it in a type guard 
if (typeof z == "string") {
    z.toUpperCase();
}
let myObj;
myObj = [1, 2, 3];
myObj = { fname: "Justin" };
if (myObj instanceof Array) {
    console.log(myObj);
}
else {
    let values = Object.values(myObj);
    console.log(values);
}
//INTERFACE
