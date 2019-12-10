//  Обьявления функций  
function myFunc() { 
    function userFunc () {
        return "myFunc here";
    }
    return userFunc();
}

// Стрелочные фунции (лямбда-функции)

myArg => myArg * 2

// Конструкторы функций. Позволяет динамически конструировать новую функцию 
// из символьной строки, которая может быть сформирована динамеческий.
new Function ('a', 'b', 'return a+b');

// Фунции-генераторы. Позволяет выйти и сного войти при последующем выполнении сохраняя 
// значения переменных в промежутках
function* myGen () { yield 1; }

// Функциональные выражения  (ФВ)
// ***  start  ***
function myFuncDeclaration() {      // определение автономой функции
    function innerFunctio() {}      // определение внутренней функции
}

var myF = function () {};           
myF(function () {
    return function() {};
});
                                    
(function namedFuctionExpression() {// именнованное ФВ в качестве значения, возвращаемого функции    
}) ();

+function() {} ();                  // ФВ немеленно вызываемые как аргументы унарных операций 
-function() {} ();
!function() {} ();
~function() {} ();


var doNothing = function() {};      // ФВ можно вызвать с помощью переменной
doNothing();                




function doSomething(action) {
    action();                       // Если ФВ указывается в качестве аргумента другой ф, то 
}                                   // можно вызвать по совпадающему имени 

// ***  end  ***



