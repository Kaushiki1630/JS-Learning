// inheritance

class User {
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);             // aapne pass parent class ka constructor ko call kr dega
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher1 = new Teacher("Kaush", "teacher@gmail.com", "1234");
teacher1.addCourse();