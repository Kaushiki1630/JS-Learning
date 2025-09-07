
// NORMAL FUNCTION

// function show(){
//     console.log("DB Connected");
// }
// show();


//   IIFE

(function show(){
    // named iife hai kyun ki iska naam hai
    console.log("DB Connected");
})();

((name) => {
    // unnamed iife hai
    console.log(`DB Connected Two, ${name}`);
})("Kaush");