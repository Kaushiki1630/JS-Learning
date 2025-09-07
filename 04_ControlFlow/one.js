// // 1. if(){}

// const isUserLoggedin=true;
// const temperature=45;

// // if(isUserLoggedin){
// //     console.log("Hey");
// // }

// if(temperature>=50){
//     console.log("Temperature is more than or equal to 50");
// }
// else{
//     console.log("Temperature is less than 50");
// }


// const score=200;
// if(score>100){
//     let power="fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);    // Will show error as power is out of scope. It was decalred inside the if then it can only be accessible inside if only.


// ********SHORT HAND NOTATION********

// const balance=1000;
// if(balance>500) console.log("Money");


// ********NESTED IF******

// const paisa=10000;
// if(paisa<1000){
//     console.log("Paise jada hain 1000 se");
// } else if(paisa <5000){
//     console.log("Paisa aur bhi jada hai 5000 se");
// } else if(paisa < 10000){
//     console.log("Paisa aur bhi jada hai 10000 se");
// } else{
//     console.log("Nhi! Paisa toh 10000 hai");
// }


// Working with the real life situations

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy courses");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In");
}