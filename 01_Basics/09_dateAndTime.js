// // let myDate = new Date();
// // console.log(myDate.toString());
// // console.log(myDate.toDateString());
// // console.log(myDate.toISOString());
// // console.log(myDate.toJSON());
// // console.log(myDate.toLocaleDateString());
// // console.log(myDate.toLocaleString());

// //creating my own date

// // let myCreatedDate = new Date(2025, 6, 16);
// // let myCreatedDate = new Date(2025, 6, 16, 5, 8,3);
// // let myCreatedDate = new Date("2023-01-16");
// let myCreatedDate = new Date("07-16-2026");
// // console.log(myCreatedDate.toLocaleString());

// let myTS =  Date.now();
// console.log(myTS);
// console.log(myCreatedDate.getTime());
// // Agar seconds m chahiye toh
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getFullYear());

// console.log(`${newDate.getDay()} and the time is ${newDate.getTime().toLocaleString()}.`);


//custom formatting using toLocaleString()

console.log(newDate.toLocaleString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
}));