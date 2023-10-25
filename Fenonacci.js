// function printFibonacci(n) {
//     let a = 0, b = 1, c;
//      console.log(a);
//      console.log(b);
//     for (let i = 2; i < n; i++) {
//       c = a + b;
//       console.log(c);
//       a = b;
//       b = c;
//     }
//   }
  
//   printFibonacci(10);


function printFibonacci(n){
 let a = 0, b = 2, c;
 for (let i =1; i < n ; i++){
    c= a+b;
    console.log(c)
    a = b;
    b = c;
 }

}
printFibonacci(20)


let string = "abccba"


