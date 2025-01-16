// let a = [2, 21, 32];
// let max = a[0];

// for (let i = 0; i < a.length; i++) {
//   if (a[i] > max) {
//     max = a[i];
//   }
// }
// console.log(max);

let a = 232111;
let b = 12222;
let c = 2333;

if (a >= b && b >= c) {
  console.log(a);
} else if (a >= c && c >= b) {
  console.log(a);
} else if (b >= c && b >= a) {
  console.log(b);
} else if (b >= a && c >= a) {
  console.log(b);
} else if (c >= a && c >= b) {
  console.log(c);
} else if (c >= b && b >= a) {
  console.log(c);
}

// a>b>c a>c>b
// b>a>c b>c>a
// c>a>b c>b>a

// a>b a>c a<d
// a>b b>c a<d
// a>c c>b a<d

// b>a b>c b<d
// b>a a>c b<d
// b>c c>a b<d

// c>a c>b c<d
// c>a a>b c<d
// c>b b>a c<d

if (a > b && a > c && a < d) {
  console.log(a);
} else if (a > b && a > d && a < c) {
  console.log(a);
} else if (a > c && a > d && a < b) {
  console.log(a);
} else if (b > a && b > c && b < d){
    console.log(b)
} else if(b > a && b > d && b < c){
    console.log(b)
} else if(b > d && b > c && b < a){
    console.log(b)
} else if(c > a && c > b && c < d){
    console.log(c)
} else if(c > a && c > d && c < b){}
    console.log(c)
// } else if(c >  && )
