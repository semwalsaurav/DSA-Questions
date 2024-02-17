let definition= `A pure function is a function that, given the same input, 
will always return the same output and has no side effects. 
console.log() is not a pure function in JavaScript.
console.log() does not adhere to this definition because it has a side effect: it outputs data to the console.(calling other function inside it)
 Additionally, console.log() does not always return the same output,
  as it depends on the data passed to it.`




// Pure functions => value of function for a particular input will always be same 

// function which are deterministic
// no matter how many time we call it will produce same output for particular input
function area(length, breadth){
    return length*breadth;
}
console.log(area(10,20))
console.log(area(10,20))
console.log(area(10,20))
console.log(area(10,20))
//for all console we will get same value so area funtion is Pure function.
function randomFunc(length, breadth){
    let randomVal=Math.random()*10;
    return length*breadth*randomVal;
}
console.log(randomFunc(10,20));
console.log(randomFunc(10,20));
console.log(randomFunc(10,20));
console.log(randomFunc(10,20));
// for these console value will be different for same inputs so it is not pure function
let output=console.log("hello js"); //console.log returns undefined every time.
let output1=console.log("hello js"); // output and output1 are undefined but console.log is not pure function because it can have side effect in input parameters
console.log("output ", output, " output1 ",output1)


//this  areaWithConsoleLog is not a pure function because it is calling console.log inside it.
// console.log function can be changed in future so it wii became undeterministic.
function areaWithConsoleLog(length, breadth){
    console.log("val: ",length, breadth)
    return length*breadth;
}
// if a function is called inside another function then outer function will not be pure function.

/*
Q1. Why pure functions are important.
Ans. 1. Pure functions are Deterministic so we can use then at multiple places
     2. We can memoisation pure function.
*/