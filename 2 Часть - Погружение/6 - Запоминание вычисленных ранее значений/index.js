function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}

// Создать кеш
function isPrime(value) {   
    if (!isPrime.answers) {
        isPrime.answers = {};   
    }


if (isPrime.answers[value] !== undefined) {
    return isPrime.answers[value];
}

var prime = value !== 0 && value !== 1 // если не просто число

for (var i = 2; i < value; i++) {
    if (value % i === 0) {
        prime = false;
        break;
    }
}
    return isPrime.answers[value] = prime;
}

assert(isPrime(5), "5 is prime!");
assert(isPrime.answers[5], "The answer was cached");

/*
Вывод зеленого цвета
* 5 is prime!
* The answer was cached


Ввод в консоль:
isPrime(1)
false

isPrime(2)
true

isPrime(5)
true

isPrime["answers"]
{1: false, 2: true, 5: true}        <-- проверка содержимого
 */
