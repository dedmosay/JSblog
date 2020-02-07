
const firstConst = "samurai";
assert (firstConst === "samurai", "firstConst есть samurai");

try {
    firstConst = "ninja"; // попытка изменить firstConst
    fail("Не должно быть здесь");
} catch(e) {
    console.log("Произошло исключение");
}

assert(firstConst === "samurai", "firstConst все еще samurai!");
const secondConst = {};

secondConst.weapon = "wakizashi";
assert(secondConst.weapon === "wakizashi", "Мы можем добавить новые свойства");

const thirdConst = []; 
assert(thirdConst.length === 0, "Нет элементов в нашем массиве");

thirdConst.push("Yoshi");

assert(thirdConst.length === 1, "Массив изменился");