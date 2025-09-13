// ES6 k baad hi classes wagera aayi thi
// Baki abhi bhi, classes hai toh, syntatical sugar hi 

class User{
    constructor(username, email, password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `@${this.username}`;
    }
}

const user1 = new User("Kaush", "kaush123@gamil.com", "12345")

console.log(user1.encryptPassword());
console.log(user1.changeUsername());


// behind the scene - agar m ne class create na kiya hota toh

function User(username, email, password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abcd`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const user2 = new User("Meow", "meow987@gmail.com", "meow123");
console.log(user2.encryptPassword());