function name (/*параметры*/) {  
    // инструкция
}

function func (a, b) { 
    // undefined + undefined = NaN
    return a+b;
}
console.log(func (/*аргумент*/ 3, 4)) // 7



function func1() {
    function funcExample(){
        return 'one';
    }
    return funcExample();

    function funcExample() {
        return 'two';
    }
}
function func2() {
    var funcExample = () => {
        return 'one';
    }

    return funcExample(); 

    var funcExample = () =>{
        return 'two';
    }
}
console.log(func1());   // two
console.log(func2());   // one


// Функция выполняющая действие после полученого ответа callback
// Функции обратного вызова
var funcA = (callback) => {
    var name = 'Nick';
    return callback(name); 
}
console.log( funcA(function(n) {
    return "Hello " + n;
}) );
// Hello Nick


// Возвращаемые функции
function funcB() {
    return function () {
        console.log("Hi!")
    };
};
funcB()(); 
// Hi

// Анонимные самовызывающиеся функции

;(function(){
    console.log('пример самовызывающиеся функции')
}) ();
// пример самовызывающиеся функции
 


 var funcArgs = function() {
    var i,
        sum = 0;
    for (i=0; i < arguments.length; i++){
        sum += arguments[i];
    }; 
    return sum;
 };
 console.log(funcArgs(1,2,3))