// for loop

// for(let i=0; i<10; i++){
//     console.log(i+1);
// }


// nested for loop

// for (let i = 0; i <= 5; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 5; j++) {
//         console.log(`Inner loop value: ${j}`);
//     }
// }


// Arrays in loops

const arr=['a','b', 'c', 'd','e'];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
   // console.log(element);   
}

// BREAK AND CONTINUE

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log('Detected 5');
        break;
        console.log("hey");
        
    }
    console.log(`value of i is ${i}`);
}

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log('Detected 5');
        continue;
        console.log("hey");
        
    }
    console.log(`value of i is ${i}`);
}
