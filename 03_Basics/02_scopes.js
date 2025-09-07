var b=300;

if(true){
    let a=10;
    var b=20;
    const c=30;
}

function one(){
    const username="hitesh";

    function two(){
        const website="youtube";
        console.log(username);
    }

   // console.log(website);
    two();
}
//one();

// console.log(a);
//console.log(b);
// console.log(c);


// Same is the working of if else block
//For eg:

if(true){
    const username="kaushiki";
    if(username==="kaushiki"){
        const website=" youtube";
       // console.log(username +  website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++ interesting +++++++++++++++++++++
//(Hosting of the function)

console.log(addOne(3));

function addOne(num){
    return num+1;
}
// addOne(3);

console.log(addTwo(4));
const addTwo = function(num){
    return num+2;
}
// addTwo(4);
