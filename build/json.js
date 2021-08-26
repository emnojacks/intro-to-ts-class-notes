"use strict";
//JSON
//javascript object notation 
//can be object, array, string, number, literals (false, true, null)
function isJSON(j) { }
;
let test1 = { fname: "emj", data: [1, 2, 3] };
let test2 = "test string";
let test3 = [1, 2, "hello", { fname: "emj" }];
//modify the 3 types jsonvalues to parse json and fail otherwise 
//use the isJSON function to test 
isJSON(test1);
isJSON(test2);
isJSON(test3);
//write test and if it valid json you should call the test on it 
//badcases fail good cases pass
//write three tests that are good 
//two tests that are bad 
//these should fail 
//@ts-expect-error
isJSON(undefined);
//@ts-expect-error
isJSON(isJSON);
