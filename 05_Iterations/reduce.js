// reduce()

const nums=[1,2,3];

// using reduce in fucntions

// const total = nums.reduce(function(acc, curVal) {
//     console.log(`acc: ${acc} and curVal: ${curVal} `);
//     return acc+curVal;
// }, 0);

// using reduce in arrow function
const total=nums.reduce((acc, curVal) => acc+curVal, 0);

//console.log(total);


// SECOND EXAMPLE

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice= shoppingCart.reduce((total, item) => total+item.price, 0);

console.log(totalPrice);

