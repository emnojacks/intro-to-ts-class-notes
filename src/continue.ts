//TYPE
//type allows us to add to the type system

type Year = string | number;

enum Color {
    "red", //0
    "blue",//1
    "yellow"//2
}
//theyre all associated with numbers in the backend 
//if you say "red" = 2 then all the other indices shift up

type Car = {
    year: Year
    color: Color
}

type addInput = number | string; 
function addTwoThings(x: any, y: any) : addInput {
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
    console.log(myObj)
}
else {
    let values = Object.values(myObj);
    console.log(values);
}
//INTERFACE

