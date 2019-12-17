function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}
// Вызов функции
/*
function user(name) {}
function None(name) {}

user("John");
(function(who){ return who; })("John");     // Вызов как функции

var none = {
    user: function() {}
};

none.user("John");              //  Вызов как метода none()

none = new None("John");        //  Вызов как конструктора

none.call(none, "John");        //  Вызов через метод call()

none.apply(none, ["John"]);     //  Вызов через метод apply()
*/

//Вызов как функции
function audi() {              // Функция в не стором режиме
    return this;
}

function bmw() {            // !!!
    // "use strict";        // обрати внимание, что в данном случае будет КРАСНЫМ
    return this;
}
assert(audi() === window, "In a 'nonstrict - the context is the global window obj");
assert(bmw() === undefined, "In a 'strict' bmw func");


// отличия и сходства в вызовах функций как ФУНКЦИЙ и как МЕТОДОВ

function whatsMyContext () {
    return this;        // теперь это контекст относится к window 
}

var getMyThis = whatsMyContext;     // Задается ссылка на объект whatsMyContext()

assert(whatsMyContext() === window, "Function call on window");
assert(getMyThis() === window, "Another function call in window");

var agent1 = {   
    func : function() {
        console.log(1213);
    },
    getMyThis: whatsMyContext,
};

assert(agent1.getMyThis() === agent1, "Working with 1st agent // ");

var agent2 = { 
    getMyThis: whatsMyContext
};

assert(agent2.getMyThis() === agent2, "Working with 2st agent");
console.log(agent1.getMyThis.myToken)

var test = agent1;
var agent3 = {
    test : agent1
}

agent3.test.func();


// Вызов функции как констуктора
function Build() {
    this.myfunc = function() {
        return this;
    };
}
var programm1 = new Build();
var programm2 = new Build();

assert(programm1.myfunc() === programm1, "programm1 build");     //  в каждом случае возвращается созданный объект 
assert(programm2.myfunc() === programm2, "programm2 build");


// ПРОВЕРКА НА ВНИМАТЕЛЬНОСТЬ : ЧТО ВЕРНЕТ ASSERT ? TRUE : FALSE
var puppet = {
    rules : false
}
function Emperor() {
    this.rules = true;
    return puppet;
}
var emperor = new Emperor();

assert(emperor === puppet, 'Объект возвращаемый конструктором');
assert(emperor.rules === true, ' ? TRUE : FALSE'); // подсказка:  функция emperor ссылается  на puppet