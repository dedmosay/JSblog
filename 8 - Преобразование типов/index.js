console.log(typeof String(123));    //  string
console.log(typeof Number('123'));  //  number
console.log(typeof Boolean(0));     //  boolean

console.log(typeof (5 + '1'));      //  string

// Быстрое преобразование
console.log(typeof (234 + ''));     // string
console.log(typeof (+'123'));       // number
console.log(!!'123');               // boolean '' false  или '123' true
              
var num = 777;
console.log(typeof num.toString()); // string

var str = "123 px"
console.log(typeof parseInt(str))   // number 123
console.log(typeof parseFloat("100.25 px", 10))     // 100.25


