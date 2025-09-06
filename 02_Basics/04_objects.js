const tinderUser = new Object();
const tinderUser1 = {};

tinderUser1.id="123abc";
tinderUser1.name="Kaush";
tinderUser1.loggedIn=false;

// console.log(tinderUser1);

// **********NESTED OBJECT*********

// const regularUser = {
//     email:"example@gmail.com",
//     fullName: {
//         userFullName:{
//             firstName:"Kaushiki",
//             lastName:"Chaudhary"
//         }
//     }
// }

// console.log(regularUser.fullName.userFullName);

// ********Concatinating two objects********

const obj1={
    1:'a',
    2:'b'
};
const obj2={
    3:'c',
    4:'d'
};

// const obj3=Object.assign(obj1, obj2);   //used less
// const obj3={...obj1, ...obj2};
// console.log(obj3);

// const objs = [
//     {
//         1:'a'
//     },
//     {
//         email:'a'
//     },
//     {
//         2:'a'
//     },
//     {
//         3:'a'
//     },
//     {
//         4:'a'
//     },
// ];
// console.log(objs[1].email);

// console.log(Object.keys(tinderUser1));
// console.log(Object.values(tinderUser1));

// agar hame koi key search krni hai ki woh hai uss object k pass ya nahi, toh we use .hasownproperty()

// console.log(tinderUser1.hasOwnProperty("name"));


// ********Object Destructuring***********

const course={
    courseName:"JavaScript",
    coursePrice:"999",
    courseTeacher:"Hitesh Sir"
}

// course.courseTeacher
// course.coursePrice

const {courseTeacher: CTeacher, coursePrice:CPrice} = course;
console.log(CTeacher);
console.log(CPrice);

// *************JSON API**********

//json

// {
//     "name":"Kaushiki",
//     "age":20,
//     "isStudent":true
// }


//API: it is a bridge that allows 2 programs to talk to each other.



