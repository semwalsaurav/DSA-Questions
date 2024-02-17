//1. function is avilable before declaration, 
//hoisting move all function declaration to 
//the top before execution of the code.
test1()
function test1(){
    console.log("hello word!!");
}
test1()
/*
   JavaScript Hoisting refers to the process 
    whereby the interpreter appears to move the 
    declaration of functions, variables, classes, 
    or imports to the top of their scope, prior to 
    execution of the code.
 */

//2. Variable hoisting
function test2(){
    console.log("value of x ",x); //Undefined because x is hoisted with undefined as default value
    var x=90;
}
test2()
function test3(){
   // console.log("value of x ",x,y); // error  "Cannot access 'x' before initialization"
    let  x=90; // let and const are hoisted but they are hoisted in temporal dead zone
    const y=91;
}
test3()
function test4(){
    var x;
    var x;
    console.log("Value of x at 32: ",x) // Value of x at 32:  undefined
    var x=10;
    console.log("Value of x at 34: ",x) // Value of x at 34:  10
    var x;
    console .log("Value of x at 36: ",x) // Value of x at 36:  10 because x was hoisted already at lien no 30 and initialize at line 33
}
test4();

//3. Var vs let
function varTest(){
    var x=1; // here x is hoisted with value 1 and in this function scope only one instance of x will be present
    {
        var x=2; // here same x hoisted at line 42 will be assigned with 2
        console.log("value of var x: ",x) // Value of var x:  2
    }
    console.log("Value of var x: ",x); // Value of var x:  2
}
varTest();




function letTest(){
    let x=1; //this x will be presnet in this function scoep from line 54 to 61
    {
        let x=2; // let is block scope, this x will be available in line no. 56 to 59 
        console.log("Value of let x: ",x) //Value of let x:  2, as nearest scope variable have higher priority
    }
    //let y=1;
    //let y=2; // Error x is already defined
    console.log("value of let x: ",x) //Value of let x:  1
}
letTest()

function test5(){
    console.log("value of x before: ",x); // value of x before:  undefined "because var x is hoisted at the top with value of undefined"
    var x=90;
    console.log("value of x afetr: ",x); // value of x afetr:  90
}
test5()


// Var Global Local conflict
var rate=10;
function varGlobalLocalConflict(){

    if(rate === undefined){
        console.log("rate ",rate) // rate is undefined here because in local scope we have rate defined it will access local rate.
        var rate = 6;
        return rate;
    }else{
        return rate;
    }
} 
console.log("value of raete: ",varGlobalLocalConflict()); //value of raete:  6
/*
Explanation of output as "value of raete:  6"
rate is in global and local scope both local rate will get priority
1. when code reaches inside function varGlobalLocalConflict it have
   rate inside function so it will be hoisted again inside function with
   initial value of undefine so if condition will be true and it will return 6. 
*/


// With noconflict
var rate1=10;
function varWithNoConflict(){
    if(rate1===undefined){
        console.log("Rate1 is undefined")
    }else{
        console.log("Rate1 is 10")// this will be printed because rate1 will hoisted in gloabl scope and used in local scope also.
    }
}
varWithNoConflict()





{
    //in this block let a is defined so  from here temporal dead zone starts
    const func=()=>{
        console.log("value of a: ",a);
    }
    let a=100; //temporal dead zone ends here because gere a is declared.
    func(); // This functio call will print "value of a: 100" because funtion is called after a is declared
}

{
    //in this block let a is defined so from here temporal dead zone starts
    const func=()=>{
        console.log("value of a: ",a);
    }
    //func(); // This functio call will be error "ReferenceError: Cannot access 'a' before initialization" because this function is called before a is declared
    let a=100; //temporal dead zone ends here because gere a is declared.
}
{
     //func(); //Cannot access 'func' before initialization because func is arrow function and arrow function are not hoisted
    var func=()=>{
        console.log("value of a:",a);
    }
    let a=10;
}
{
    testing(); //ReferenceError: Cannot access 'a' before initialization
    //function called before creating "let a=10" so it will produce error
    let a=10;
    function testing(){
       console.log("value of a in normal function :",a);
    }
    
}
{
    let a=99;
    const func=()=>{
        console.log("calue of a: ",a); //calue of a:  99
    }
    func();
}