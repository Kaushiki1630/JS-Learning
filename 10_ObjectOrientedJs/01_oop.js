const user ={
    username:'Kaushiki',
    id:"ABC123",
    followers:123,

    getUserDetails: function(){
        console.log(this.id);
    }
}

const user1 ={
    username:'Kaush',
    id:"AB23",
    followers:13,

    getUserDetails: function(){
        console.log(this.id);
    }
}

// user1.getUserDetails();

// constructor function()

function User( username, loggedIn, id){
    this.username=username;
    this.loggedIn=loggedIn;
    this.id=id;

    this.message = function(){
        console.log(`Hello! ${this.username}`);
    }

    //  return this;
}

const user5 = new User("Kaush", false, 123);
const user6 = new User("Kaushiki", true, 765);
//console.log(user6);
//console.log(user5);

//console.log(user5.message());

console.log(user5.constructor);