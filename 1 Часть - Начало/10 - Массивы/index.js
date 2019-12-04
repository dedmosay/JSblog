// Массивы это упорядоченые наборы данных
// Создание массива способом литерала
var arr = [1,2,3, 'str'];

// Создание массива способом new Array
var arr1 = new Array(1,2,3)
console.log(arr);    //  [1, 2, 3, "str", {}]
console.log(arr1);   //  [1, 2, 3]

/** [1, 2, 3, 4, 5]
 *   0  1  2  3  4   
 */

 console.log(arr.length);   //5
// плохой метод удаление т к оставляет за собой дыры
 delete arr[1];         // удаляет из массива значение 
 console.log(arr); 
 //[1, 2: 3, 3: "str", 4: {}] 



 arr.splice(1, 1)       // (c какого индекса, сколько удаляем)
 console.log(arr); 
 //[1, 3, "str", {}]

 // добаление значения в конец массива
 arr[arr.length] = 'new';
 console.log(arr);       
 //[1, 3, "str", {}, "new"]
 //но обычно используют метод push

var matrix = [
     [1,2,3],
     [4,5,6],
     [7,8,9]
];
console.log(matrix);

arr.concat(matrix); // соединить arr и matrix

console.log(arr.join('  '));    // помещает  пробел между элементами
//  1  3  str  new
console.log(arr.join(''));      // соединяет массив
//  13strnew

arr.push('new2');
console.log(arr);
// [1, 3, "str", "new", "new2"] 

arr.pop()
console.log(arr);
// [1, 3, "str", "new"]

  
arr.unshift('next');
console.log(arr);
//  ["next", 1, 3, "str", "new"] 

arr.shift();
console.log(arr);
//  [1, 3, "str", "new"]

var myArr = arr.reverse();
console.log(myArr);
//  ["new", "str", 3, 1] 
 
var myClised = arr.slice(0, 2); // Вырезать с 1 по 2
console.log(myClised)
//  ["new", "str"]

var notSort = [1,3,2,8,6,7,5,9,4]
notSort.sort();
console.log(notSort);
//  [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Внимание! Sort сортирует не правильно с некоторыми числами

