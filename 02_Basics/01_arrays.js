// // // array

//  const myArr = [0,1,2,3,4];
// // // console.log(myArr[2]);
// // // const myFriends= ["Kirti", "Kaushiki", "Meow"];
// // // const newArray = new Array(1,2,3,4,5,6);

// // // Arrays Methods

// // myArr.push(6);
// // myArr.push(9);
// // console.log(myArr);
// // myArr.pop();
// // console.log(myArr);


// // // aage value add kr dega, peeche k saare elements shift honge by 1, jo ki aacha nahi mana jata
// // myArr.unshift(9);
// // console.log(myArr);

// // // jo element dala hoga aage, woh nikaal dega, like pop, pr aage se
// // myArr.shift();
// // console.log(myArr);

// // myArr.shift();
// // console.log(myArr);

// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(9));

// // const newArr = myArr.join();
// const newArr = myArr.join(" ");

// console.log(myArr);
// console.log(newArr);



//********** slice and splice **************

const arr1 = [1,2,3,4,5,6,7];
const newArr1 = arr1.slice(2,5);
console.log("Example of Slice:");    // original array is not modified
console.log(arr1);
console.log(newArr1);

const newArr2 = arr1.splice(2,4);
console.log("Example of Splice:");    // original array is modified
console.log(arr1);
console.log(newArr2);







