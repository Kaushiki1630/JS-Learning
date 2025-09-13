class User {
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createdId(){
        return `123`;
    }
}

const kaush = new User("Kaush");
// console.log(kaush.createdId());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email=email;
    }
}

const bamie = new Teacher("Bam", "bam123@gmail.com");
bamie.logMe();
