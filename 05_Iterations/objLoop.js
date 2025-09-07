
// for in loop

const myObj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObj) {
    //console.log(key);
   // console.log(myObj[key]);
}  
//normal keys print krega but agar values bhi print krani hai toh: console.log(myObj[key]);


// for-in on arrays

const programming=['js','rb','py','java'];

for (const key in programming) {
    //console.log(key);   

    // yahan pr key ka mtlb hai index. So agar hame array ki value chahiye toh we can do as below:

    //console.log(programming[key]);
}


// for-in on maps


// const map=new Map();
// map.set(1, "Kaush1");
// map.set(2, "Kaush2");
// map.set(3, "Kaush3");
// map.set(4, "Kaush4");

// for (const key in map) {
//     console.log(key);
// }

//// Maps are also not iterable as they are objects