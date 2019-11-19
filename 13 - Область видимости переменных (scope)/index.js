
let l = 1
var k = 4;



console.log(k);
console.log(l);
// Каждая новая функция это новая область видимости
// Каждая неопределенная переменная это переменная
// относящиеся именно к этой новой функции

var outerScope = function() {
    var k = 8;
    let l = 2;
    console.log(k);
    console.log(l);
    
    var innerScope = function() {
        var k = 12;
        let l = 3
        console.log(k);
        console.log(l);
    }

    innerScope();
    console.log(k);
    console.log(l);
}
outerScope();
