var str = "stroka";

// Экранирование
var str2 = "\"stroka\" is data type";
var str3 = '"stroka" is data type';
// Перенос строки   \n

// длинна строки
console.log(str.length)

// сложение строк
console.log('hello ' .concat('world'));


// Вывести символ под индексом 0
console.log( str.charAt(0)); //s

// s = 115 UniCode
console.log( str.charCodeAt(0)); //115


// вывести толь с 4 индекса
// s1 t2 r3 o4 k5 a6
console.log(str.substring(4))       //ka
console.log(str.substring(2,4))     // ro (начальный символ с , до последний символ)
console.log(str.slice(-2))          // ka - выводит последние 2 буквы
console.log(str.substr(1, 2))       // tr (начальный символ с , на сколько обрезать)

var str1 = 'This is string for test'
console.log(str1.split(' '))        // ["this", "is", "string", "for", "test"] 
 
console.log(str1.replace("for", "my"))  // this is string my test
console.log(str1.indexOf('i'))          // 2
console.log(str1.toUpperCase() )        // THIS IS STRING FOR TEST  
console.log(str1.toLowerCase() )        // this is string for test


// Часто используемые  slice, substr, split
// Очень полезные charAt, charCodeAt, replace
