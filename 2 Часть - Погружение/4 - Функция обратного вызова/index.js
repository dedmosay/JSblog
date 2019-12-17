function report(text) {
    console.log(text);
}

var text = "0 - Demo code";                     //  Значение глобальной переменной
report("1 - Before defining functions"); 

function useless (userCallback) {              // Определить функцию, которой предается и сразу вызывается ф-я обратного вызова
    report ("4 - In useless function '" + userCallback + "' ");
    return userCallback;
}

function getText(text) {                          // Определить простую ф-ю, возвращающую значение глобальной переменной
    report ("3 - In getText function '" + text + "' ");
    return text;
}

report ("2 - Before making all the calls");

console.assert(useless(getText("0 - Demo code")) === text,  "0 - The useless function works! " + text);    
// обработчик ошибок ( здесь вызываем метод userless(который содержит getText()) == text сравниваем, если false - выводим сообщение) 

report ("5 - After the calls have been made");



/*
Output
1 - Before defining functions
2 - Before making all the calls
3 - In getText function 'undefined' 
4 - In useless function 'undefined' 
 Assertion failed: 0 - The useless function works! 0 - Demo code // ошибка потому что  getText(text) метод не получил на вход Значение или не соотв-ет 
5 - After the calls have been made
*/