// const user={
//     username:"Kaushiki",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to the JavaScript Learning session.`);

//        // console.log(this);
//     }
// }

// // user.welcomeMessage();
// // user.username="Kirti";
// // user.welcomeMessage();

// console.log(this);



// function show(){
//     const user="abc";
//     console.log(this.user);
// }

// show();


// const display =function(){
//     const user="abc";
//     console.log(this.user);
// }

const display = () => {
    const user="abc";
    console.log(this.user);
}

display();
