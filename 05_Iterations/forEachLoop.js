// for-each loop

const coding=['js','ruby','java','python','cpp'];

// coding.forEach( function (coding){
//     console.log(coding);
// })


// arrow fucntion inside forEach loop

// coding.forEach( (coding) => {
//     console.log(coding);
    
// })

function printMe(coding){
   // console.log(coding);
}

// console.log(printMe(coding));
//coding.forEach(printMe);

// using other arguments of forEach

coding.forEach( (coding, index, array) => {
    //console.log(coding, index, array);
});

// an example where array can have multiple objects

const myCoding=[
    {
        langName:'Java',
        langTeacher:'T1'
    },
    {
        langName:'C++',
        langTeacher:'T2'
    },
    {
        langName:'Python',
        langTeacher:'T3'
    }
];

myCoding.forEach( (item) => {
    console.log(item.langTeacher
    );
});