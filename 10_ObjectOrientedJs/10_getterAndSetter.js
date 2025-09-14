class User{
    constructor(email, password){
        this.email=email;
        this.password=password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    get password(){
        return this._password.toUpperCase();
    }

    set email(mail){
        this._email=mail.toUpperCase();
    }

    set password(pass){
        this._password=pass.toUpperCase();
    }
}

const k = new User("k@gmail.com", "abc");
console.log(k.password);
console.log(k.email);