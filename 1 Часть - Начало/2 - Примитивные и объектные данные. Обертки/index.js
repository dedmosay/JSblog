var str = 'stoka',      // String
    number = 10,        // number
    nuberSecond = 1.2,  // Duble
    bool = true,        // Булеан
    undefined,          // Не задано значение
    nulll = null;       // Пустота

var obj =  {
    prop : "sboystvo_and_stroka",
    prop : function method() {
    }
};



console.log("Примитивные типы данных")
console.log(typeof str + "  str");
console.log(typeof number + "  number");
console.log(typeof nuberSecond + "  nuberSecond");
console.log(typeof bool + "  bool");
console.log(typeof undefined + "  undefined");
console.log(typeof null + "  null");
console.log(typeof obj + "  obj");


func = function test(){};
RegExp = /bla/g;
arr = [1,2,3];

console.log("Объектные типы данных");
console.log(typeof func + "  func");
console.log(typeof RegExp + "  RegExp");
console.log(typeof arr + "  arr");


obj.prop = "hello";
console.log(obj);
arr[2] = 23;
console.log(arr);
console.log(str.toUpperCase()); // STOKA

var num = 123;
console.log(typeof num.toString()) //string
/*

Примитивные типы данных
string  str
number  number
number  nuberSecond
boolean  bool
undefined  undefined
object  null
object  obj


Объектные типы данных
function  func
object  arr
object  RegExp
{prop: "hello"}
(3) [1, 2, 23]

*/


/*
Обертки позволяют вести себя как объкты

String
number
boolean

*/