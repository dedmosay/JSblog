//Замыкание это функция и все внешние перемнные которые ей достуны

var firstFunc = () => {
    var index = 5;

    return () => {
        return index;
    }
}

var secondFunc = () => {
    var index = 15;

    console.log(firstFunc()()); // 5
}
//1 - Замыкание позволяет сохранять промежуточные данные

secondFunc();

//2 - Икапсуляция данных (позволяет избежать глобальности)
console.log(index); 
// ReferenceError: Can't find variable: index
