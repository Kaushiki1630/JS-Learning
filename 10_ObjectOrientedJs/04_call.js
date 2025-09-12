function setUserName(username){
    this.username=username;
}

function createUser(username, email, password){
    setUserName.call(this , username);
    this.email=email;
    this.password=password;
}

const obj = new createUser("Kaushiki", "kaushiki123@gmail.com", 123456);

console.log(obj);

//When one function is called inside another, the inner function doesn’t automatically use the outer function’s this.
// To make it share the same this (so it can access and modify the outer object), we use .call().


// Agar koi normal function hai → uska this decide hota hai jisne call kiya uske basis pe.

// Agar function ke andar ek aur inner function hai aur usey normally call kar diya → uska this global/undefined hoga, outer function ka this inherit nahi hota.