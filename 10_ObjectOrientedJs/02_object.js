function multiply5(num){
    return num*5;
}

multiply5.power = 2;

// console.log(multiply5(4));
// console.log(multiply5.power);
// console.log(multiply5.prototype);

function user(username, score){
    this.username=username;
    this.score=score;
}

user.prototype.increment = function(){
    this.score++;
}
user.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

// agar hum new keyword use nahi krte, toh jo bhi humne naye methods khud se bnaye hain, woh execute nahi honge because, hamare function ko pta hi nahi hai, ki koi naye method uske prototype m add hue hain. Isiliye hum new keyword use krte hain
// const user1 = user("Kaushiki", 20);
// const user2 = user("Motiiii", 10);

const user1 = new user("Kaushiki", 20);
const user2 = new user("Motiiii", 10);

user1.increment();
user1.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/