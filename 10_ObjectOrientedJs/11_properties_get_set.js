// old way of using getter and setter

function User(email, password){

        Object.defineProperty(this, 'email', {
        get: function(){
           return this._email.toUpperCase();
        },
        set: function(value){
            this._email=value;
        }
    })

        Object.defineProperty(this, 'password', {
        get: function(){
           return this._password.toUpperCase();
        },
        set: function(value){
            this._password=value;
        }
    })

    // Always define your getters/setters first, then assign values so that they run through the setter logic.
    
    this.email=email;
    this._password=password;

}

const k = new User("kaush@gmail.com", "chaiiiii");

console.log(k.email);