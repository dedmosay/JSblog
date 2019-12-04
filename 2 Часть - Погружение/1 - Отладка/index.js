/*
assert (Условие, сообщение);
*/

// Простое тестирование
var num = 10;
100 > num ? value=false : value=true;
console.assert( value, "Failed!")

// Метод утверждения
function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}

function report(){
    assert (true, "The test suite running.");
    assert (false, "Fail!");
}


window.onload = function() {
     report()
}
