// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=6;
// aab hame check krna hai 12 months k liye, toh if-else se time lagega. So we use switch statement

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    
    default:
        console.log("Default case match");
        break;
}

// break ka hona jaroori hai warna jahan pr bhi case match krega, udhar se sbhi cases ka output show hoga except default.

