// function sayMyName(){
//     console.log("K");
//     console.log("A");
//     console.log("U");
//     console.log("S");
//     console.log("H");
// }

// sayMyName();

// function addTwoNo(num1, num2){
//     console.log(num1 + num2);
// }

// function addTwoNo(num1, num2){
//     // let ans=num1 + num2;
//     // return ans;
//     return num1+num2;
// }
// const result = addTwoNo(3,4);
// // console.log(result);

// function loginUserMessage(username ="Sam"){      //Passing the default value. Agar koi value given nahi hogi toh yeh use ho jayegi warna woh argument m pass kri gayi hai

//     // check kr skte hain ki kya username de diya hai ya nahi
//     if(!username){
//         console.log("Please enter the username first.");
//         return;
//     }
//     return  `${username} just logged in.`;
// }
// console.log(loginUserMessage("Kaushiki"));

// console.log(loginUserMessage());   // Output : undefined just logged in.


// *****Functions with Objects*****

// No definite number of arguments



// function calCartPrice(...numbers){
//     return numbers;
// }

function calCartPrice(val1, val2,...numbers){
    return numbers;
    //return val1, val2, numbers;    // the output still will be the same as above. As comma operator returns the output of the last parameter. If you want all the output, so use [];                      eg. [val1, val2, numbers];
};

// console.log(calCartPrice(200,100,2312,414,6456,7665));

// How can we pass objects to the functions

// const user={
//     username:"Kaushiki",
//     price:121
// }

// function handleObj(anyObj){
//     console.log(`UserName is ${anyObj.username} and price is ${anyObj.price}`);
// }

// handleObj({
//     username:"K",
//     price:22131
// });



// We can also pass array in the same way as object. For eg:

const myArray=[100,200,300,400];

function returnArrayValue(getArray){
    return getArray[1]; 
}

// console.log(returnArrayValue(myArray));

// can also pass direct array
console.log(returnArrayValue([200,300,400,100]));
