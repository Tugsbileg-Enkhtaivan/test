// for(var i = 1 ; i <= 5; i++){

//     console.log(i, ' ');

//     for( var j = 1; j <= i; j++){
//         console.log(j, ' ');
//     }
// }

// let i, j, k;

// for (i = 1; i <= 4; i++) {
//     var text = '';
//   for (j = i; j < 4; j++) {
//   }
//   for (k = 1; k < i * 2; k++) {

//   }
// }
// console.log(text)

// let num = 5;
// let pattern = "";  
// if (num > 1) {     
//     for (let i = 1; i <=num; i++) {    
//         for (let j = 1; j <= (num-i); j++) {    
//             pattern += "  ";
//         }

//         for (let k = 1; k <= i; k++) {    
//             pattern += "* ";
//         }
//         pattern += "\n";   
//     }
//     console.log(pattern); 
// }
// else {
//     pattern = "Number must be greater than 1 to print star pattern.";
// }
// q

// let num = 5;
// let pattern = "";  
//     for (let i = 1; i <= num; i++) {    
//         for (let j = 1; j <= (num- i); j++) {    
//             pattern += "  ";
//         }
//         for (let k = 1; k <= ((2 * i) - 1); k++) {     
//             pattern += "* ";
//         }
//         pattern += "\n"; 
//     }
//     console.log(pattern);  

let utga = 5;
let text = "";  
    for (let i = utga; i >= 0; i++) {    
        for (let j = utga; j <= ( 0 + i); j++) {    
             text += "* ";
            }
            for (let k = 1; k <= ((2 * i) - 1); k++) {     
             text += "  ";
            }
         text += "\n"; 
        }
        console.log (text);  




