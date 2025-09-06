// 2>3
// 3<2
// 2>=6
// 7<=4
// 4==4
// 2!=0


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined < 0);
// console.log(undefined == 0);
// console.log(undefined <= 0);

// Note 1: euqality check == and comaprison operators <,>,<=,>= have different basics of comparison. 

// Note 2: Make sure not to compare two different datatypes. The result will be unpredictable.

// ******* STRICT CHECK *******
// ===

// It not only checks the values but also the datatype

console.log("2" == 2);  // true because implictily the datatypes are changed.

console.log("2" === 2); // false because no datatype conversions are done as strict check is applied.