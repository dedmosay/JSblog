
function Ninja() {
    var closeVar=0;
    this.getFn = function () {
        return closeVar;
    }
    this.f = function () {
        closeVar++;
    }
}

var ninja1 = new Ninja();
ninja1.f();

assert(ninja1.closeVar === undefined, "undefined");

assert(ninja1.getFn() === 1, "closeVar, у нас есть доступ к счетчику");

var ninja2 = new Ninja();
assert(ninja2.getFn() === 0, "Второй ninja объект получает свою собственную переменную closeVar");

var imposter = {};

imposter.getFn = ninja1.getFn;
assert(imposter.getFn() === 1, "imposter имеет доступ к переменной closeVar")