var store = {
    nextId: 1,      // отслеживание идентификаторов
    cache: {},      // создать объект служащий в качестве кеша для хранения функций

    // Добавить функции только в том сл если они уникальны
    add: function (fn) {
        if (!fn.id) {
            fn.id = this.nextId++;
            this.cache[fn.id] = fn;
            return true;
        }
    }
};


// проверить. работает ли все так как запланировано
function user () {
    console.assert(store.add(user), "Function was safely added.");
    console.assert(!store.add(user), "But it was only added once.");
}

/*

user()     <-- вводим в консоль 
undefined
user()     <-- вводим еще
Assertion failed: Function was safely added.    <-- Видим ошибку
undefined
store ["cache"] <-- проверяем что есть в кеш
{1: ƒ}

*/