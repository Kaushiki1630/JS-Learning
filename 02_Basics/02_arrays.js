const arr1=["girl1", "girl2", "girl3"];
const arr2=["boy1", "boy2", "boy3"];

//arr1.push(arr2);
// console.log(arr1);
// console.log(arr1[3]);
// console.log(arr1[3][1]);

// const newArray = arr1.concat(arr2);
// console.log(newArray); 
// console.log(arr1);

//  *********SPREAD (...)**********

// const allStudents = [...arr1, ...arr2];
// console.log(allStudents);

// *********flat()**********

// const nestedArray = [1,2,3,[4,5,6], 7, [9,8,7, [3,1,2]]];
// const newArray=nestedArray.flat(3);
// console.log(newArray);

// ********************************

console.log(Array.isArray('Kaushiki'));   // checks if the given value is array or not

console.log(Array.from('Kaushiki'));   // converts the given value into the real array

console.log(Array.from({name:'Kaushiki'}));  // it gives an empty array as the given value is not iterable. Arrays.from() only works on iterable values.

let cons1 = 100;
let cons2 = 500;
let cons3 = 1200;
console.log(Array.of(cons1, cons2, cons3)); // we can also create the array of variables using Array.of();







