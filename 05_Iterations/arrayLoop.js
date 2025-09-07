// for of

const arr=[1,2,3,4,5];

for (const i of arr) {
   // console.log(i);
}

const greetings="Hello World!";
for (const greet of greetings) {
    // console.log(greet); 
}


//MAPS

const map=new Map();
map.set(1, "Kaush1");
map.set(2, "Kaush2");
map.set(3, "Kaush3");
map.set(4, "Kaush4");

// console.log(map);

for (const [key, value] of map) {
    //console.log(key, '-', value); 
}

const obj = {
    1 : "Kaush1",
    2 : "Kaush2",
    3 : "Kaush3",
    4 : "Kaush4"
}
//console.log(obj);

for (const [key, value] of obj) {
   // console.log(key, ':-', value); 
}

