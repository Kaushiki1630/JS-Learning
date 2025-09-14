const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

// output 

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const chai = {
    name:'ginger chai',
    price:250,
    isAvailable: true
}

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
   

for (let [key , value] of Object.entries(chai)) {
    console.log(`${key} - ${value}`);
}