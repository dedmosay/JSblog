
function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}

var sorted = 0;
var test = 0;
function multiMax (first, ...remainingNumbers) { // Оставшиеся параметры обозначают префиксом ...
     sorted = remainingNumbers.sort(function(a,b) {
        return b-a;                             //  Отсортировать оставшиеся числа по убывающей
    });
    test = first * sorted[0];
    return test;
}
assert(multiMax (3,1,2,3) == 9, 
    "3*3=9 (First arg, by largest.)  sorted:" 
    +  sorted + "test: " + test );
/*
Output:
3*3=9 (First arg, by largest.) sorted:3,2,1test: 9
*/

// обращения со стандартными параметрами в ES6
function performAction (agent, action = "007") {     // допускается присваивать значение параметру функции 
    return agent + " " + action;
} 
assert(performAction("User") === "User skulking", "The default value is used for User");        // Если значение не передано, то использ. его стандартное значение
assert(performAction("Mark", "sneaking") === "User skulking", "Mark can do whatever he pleases, even sneak!");  // Используется переданное значение параметра
/*
Output:
The default value is used for User
Mark can do whatever he pleases, even sneak!
*/

// Параметр arguments
function whatever(a,b,c) {

    assert (a === 1, "The value of a is 1");    // проверить правильность значений
    assert (b === 2, "The value of b is 2");
    assert (c === 3, "The value of c is 3");

    assert (arguments.length === 5, "We`ve passed in 5 parameters");    // На самом деле передаются 5 аргументов

    assert (arguments[0] === a, "The first argument is assined to a");  // проверить доступны ли лишние аргументы через параметр arguments
    assert (arguments[1] === b, "The first argument is assined to b");
    assert (arguments[2] === c, "The first argument is assined to c");
    assert (arguments[3] === 4, "We can access the fourth argument");
    assert (arguments[4] === 5, "We can access the fifth  argument");   
}
whatever(1,2,3,4,5);
/*
Output:
The value of a is 1
The value of b is 2
The value of c is 3
We`ve passed in 5 parameters
The first argument is assined to a
The first argument is assined to b
The first argument is assined to c
We can access the fourth argument
We can access the fifth argument
*/



