let age = "33abc";

//console.log(typeof age);

let valueInNumber = Number(age);
//console.log(typeof(valueInNumber));
//console.log(valueInNumber);

// "33" -> 33;
// "33abc" -> NaN;
// true -> 1; false -> 0;

let loggedin = "";
let valueInBoolean = Boolean(loggedin);
//console.log(typeof valueInBoolean);
//console.log(valueInBoolean);

// 1=>true; 0=>false;
//"" => false;
// "kaush"=> true;

let someNumber = 40;
let stringNumber = String(someNumber);
// console.log(typeof stringNumber);
// console.log(stringNumber);

// ******************************* Operations *******************************

let value = 3;
let negValue = -value;

//console.log(negValue);

// Some Basic Operations:
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1="hello";
let str2= " kaushiki";
let str3= str1+str2;
// console.log(str3);

// below examples ko likhna avoid krna hai because they will confuse you. If you ever want to do such calculations, try to use, brackets !! 

// If you want to learn the idea behind the calculation, refer to ecma 
// https://tc39.es/ecma262/#sec-abstract-operations

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + "2" + 2);
// console.log(1 + 2 + "2");

// console.log( 3 + 4 * 5 % 3);

let countOp = 100;
++countOp;
console.log(countOp);







