// Предисловие
/**
 * 1 Этот режим внедрен в ES5 для генерации ошибок, в то время как они могут обрабатываться не гласно
 * 2 В не строгом режиме контекст может быть глобальным (window), а в строгом режиме  -  неопределенным (undefined)
 */


"use strict";                                           // Активизировать строгий режим

function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}

function infilrate (person) {

    assert (person === 'user', "The person is a user");         // person и arguments[0] имеют одинаковое значение
    assert (arguments[0] === 'user', "The person is a user");   

    arguments[0] = 'agent';                                         // Первый аргумент изменен

    assert(arguments[0] === 'agent', "The person is a agent");      // Значение person не изменилось
}
infilrate('user');