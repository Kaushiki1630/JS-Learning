let name = "hitesh     ";

//console.log(name.length);  

// 11 ayayega pr hum chahte hain ki true length aaye hamare pass string ki. So, we can use .truelength(). But Main chahti hun ki, mera truelength() function mujhe yeh pura likhkar dekh, ki "My length of string is (proper value) aur extra space hatakar de."



// Let's start :-

let heroes = ['thor', 'spiderman'];

let heropower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.kaushiki = function(){
    console.log("Kaushiki() function is present in all the childNodes.")
}

heropower.kaushiki();  // yeh kaushiki() function herepower() function k andar aayega kaise?? So, the answer is : Agar hum Object m hi daal den, kaushiki() ko toh woh sbhi childnodes ko available hoga

// In the same way, heroes jo array hai, uske pass bhi hoga kaushiki() function available

heroes.kaushiki();

// prototype- based inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User   //old way

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)



// Aab upar wali problem ka solution mil gaya i.e. Inheritance

let newName = "Kaushhhhikiiiii     ";

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length of the string is : ${this.trim().length}`);
}

newName.truelength();

"         meow".truelength();
"Teacher".truelength();