const nums=[10,20,30,40,50,60,70,80];

//const numbers = nums.map((number) => number+10 );

const newNums = nums
.map((number) => number * 10)
.map((number) => number + 4)
.filter((number) => number>=300 );

console.log(newNums);


//console.log(numbers);
