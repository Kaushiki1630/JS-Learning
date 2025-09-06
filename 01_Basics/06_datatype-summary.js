// Datatypes are basically classified into 2 types on the basic of memory allocation and access

// 1. Primitives (call by value) - changes are made in the copy,not in the actual value.

// 7 types - Number, String, Boolean, Null, Undefined, Symbol, BigInt

const score =100;
const outsideTemp = null;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);
//(Although the Symbol have same value inside it but the result we get is not same. Return value is not same.)

const bigNumber = 32587328213950813123n;

console.log(typeof bigNumber);


// the return type of primitives may vary. For eg =>

   // null => object  - Bug in the js

// 2. Non-Primitives (call by reference) - we can directly allocate the address in the memory

// types - arrays, objects, functions

const friends = ["Kirti", "Kaushiki", "Simran", "Ankita"];   //Array

let myObjects = {              // Objects are inside the curly braces
    name: "Kaushhhh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello! Morning Everyone.");
}

// the return type of non-primitives is usually "Object" but for the function the return type is "function", also known as "Object function"
console.log(typeof  myObjects);

//********************* Memory (Stack and Heap) *********************

// Stack (Primitive) , Heap (Non-Primitive)


