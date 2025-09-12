// creating the object for the promises

// way 1 of creating and consuming the Promise

const promiseOne = new Promise(function(resolve, reject){
    // do an async task, DB Calls, cryptography, network issues
    setTimeout(function(){
        console.log('Async task is completed.');
        resolve();
    }, 2000);
});

// promise is now to be consumed after creation

promiseOne.then(function(){
    console.log("Promise consumed!");
});


// way 2

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 completed!");
        resolve();
    }, 2000);
    }).then(function(){
        console.log("PromiseTwo also consumed!");
    });


// way 3    

const promiseThree = new Promise(function(resolve, reject){
    // async Kaam
    setTimeout(function(){
        resolve({
            username:"Kaushiki",
            email:"kaushikichoudhary3@gmail.com"
        });
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
});


// way 4

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Kaushiki", password:"123456"});
        } else{
            reject('ERROR: Something went wrong');
        }
    }, 1000)
});

promiseFour.then((user)=> {
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("This is finally block. This runs always, either the function is rejected or resolved."))


