// OBJECT LITERALS

const mySym = Symbol("id");
const mySym2= Symbol("regNo");
const user1 = {
    name:"Kaushiki",
    age:20,
    [mySym]:13435342,
    [mySym2]:"UTR98765",
    email:"kaushiki@google.com",
    hasGraduated: false,
    contactNo: [8527918457, 7428434035]
};

// console.log(user1.hasGraduated);  // method 1 of printing
// console.log(user1["contactNo"]);
// console.log(user1[mySym]);
// console.log(Object.getOwnPropertySymbols(user1));

//changing the value of object
// user1.email="kaush@chatgpt.com";

// Object.freeze(user1);
// user1.email="kaushikichoudhary3@gmail.com";
// console.log(user1);

//    FUNCTIONS

user1.greetings = function(){
    console.log(`Hello! My name is ${user1["name"]}`);
    console.log(`My age is ${this.age}`);
}

console.log(user1.greetings());






