// var i;

// for( var i = 0 ; i<5 ; i++) {
//     text = text + '*'
//     console.log(text)
// }

// var i;

// for( i = 0; i<100 ; i++) {
//     if(i % 2 == 1) {
//         console.log(i)
//     }
// }

// var sum= 0;

// for( i = 1; i<=100; i++){
//     sum = sum + i ;
// } console.log(sum)

// var mul = 1;

// for( i = 1; i<=100; i++){
//         mul = mul * i
// } console.log(mul)

// var text='';

// for (var i=0; i<5; i++){
//     text += '* '
//     console.log(text)
// }

// var n = 5;
// // var text = ''

// for (var i = n; i >= 1 ; i--){
//     var text = '* '
//     text += i
//     console.log (text)
// }

// var n = 5;
// var text = '';

// for (var i = n; i >= 1; i--){
//     for (var j = n; j >= 1; j--){
//         var text = '* ';
//         text = i + j;
//         console.log (text)
//     }
// }

// var n = 4;
// var str = '';

// for ( var i = n ; i >= n; i--){
//     for (var j = n ; j >= n; j--){
//         str = '* '
//         str = str + i
//         console.log(str)
//     }
// }

// var str = '';

// for ( var i = 0 ; i >= 0; i++){
//     for( var j = 0 ; j >= 0; j++){
//         str = i + j;
//         str = '* '
//         console.log (str)
//     }
// }

// var palindrome = 'hadgalagdah'

// for ( var i = 0; i <= 10; i++){
//     for ( var j = 10; j >= 0 ;j--){
//         console.log(palindrome[j])
//         console.log(palindrome[i])
//     }
// }

// console.log(palindrome.length, palindrome[i])

// function isPalindrome(str) {
//     let j = str.length - 1
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] != str[j]) {
//             return false;
//         }
//         j--;
//     }
//     return true;
// }

// let str1 = "racecar";
// let str2 = "nitin";
// let str3 = "Rama";

// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));

// var palindrome = "hadgalagdah";
// var text = "";

// for (var i = palindrome.length - 1; i >= 0; i--) {
//   text = text + palindrome[i];
// }

// console.log(text == palindrome)

// console.log(text );

// // var text='harah'
// let j = text.length - 1;

// for (let i = 0; i < text.length / 2; i++) {
//    if(text[i] != text[j]) {
//       console.log(false)
//    }
//    j--;
// }
// console.log(true)

// var text = "";

// for (let i = 0; i < 5; i++) {
//    const element = array[i];
// }

// "    *";
// "   **";
// "  ***";

// var text = "";

// for (let i = 0; i < 5; i++) {
//   for (let j = 4; j > 0; j--) {
//    text += ' '
//   }

//   text += '*'
//   console.log(text)
// }
// var n = 3;
// var z = 2;
// var result = 1;

// for (var i = 1; i <= z ;i++){
//  result *= n;
// }
// console.log (result)



// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// else if (number > 1) {

//     for (let i = 2; i <= number/2; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {  
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }
// else {
//     console.log("The number is not a prime number.");
// }
// function isPrime(n) {

//   if (n <= 1)
//     return false;

 
//   for (let i = 2; i < n; i++)
//     if (n % i == 0)
//       return false;

//   return true;
// }

// isPrime(11)
//   ? console.log("true")
//   : console.log("false");


// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//   let text = '';
//   let j = text.length - 1;

// for (let i = 0; i < text.length / 2; i++) {
//  if(text[i] != text[j]) {
//     return false
//  }
//  j--;
// }
// if(x<0) {
//   return true
//   }
//   else{
//       return false
//   }

// };

// console.log(isPalindrome(11));

var line, triangle;
line = triangle = "";

for (var row = 1; row <= 7; row++) {
  for (var x = 0; x < row; x++) {
    line += "#";
  }
  triangle += line + "\n";
}

console.log(triangle);