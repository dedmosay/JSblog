var obj1 = new Object();

var obj2 = {
    key: 'value',
    func: function(){}
};

// чтобы достать свойства можно использовать 2 нотации

// . dotnatation
console.log(typeof obj2.key);   // string

// natation []
console.log(obj2['key']);       // value


// передача в obj2 через переменную prop 
var prop = 'func';
console.log(obj2[prop])


// Чтобы задать свойство по умолчанию
console.log(obj2.undef || obj2.key)     // value

// Добавление свойства
obj2.animal = 'Dog';
console.log(obj2);
//{key: "value", func: function, animal: "Dog"}


// Можно изменить уже существующее свойство
obj2.animal = 'Cat';
console.log(obj2);
//{key: "value", func: function, animal: "Cat"}


a={prop:1}, 
b={prop: 2}, 
c={prop: 3};

a=b=c={prop: 'animals'};
console.log(a,b,c);
/*
{prop: "animals"}
{prop: "animals"}
{prop: "animals"}
*/

//  Нужно всегда помнить, что объект передается по ссылке


// Удаление свойств

delete obj2.func;
console.log(obj2)
//{key: "value", animal: "Cat"}

// Доступ к объекту
// Метод это функция, которая является свойством объекта

var objAnimals = {
    dog: "gav",
    cat: "may",
    func: function() {
        console.log(this.cat);
    }
}

objAnimals.func(); // may

// Объявление глобальности
// до ES2015
var MYAPP = {
    // Описание всех методов и свойств
    // используемых в данном приложении
}

