
function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}



function Button() {                                             // Конструктор
    this.clicked = false;
    this.click = function() {
        this.clicked = true;
        assert (button.clicked, 'Я ничего не знаю о состоянии потому что я новый объект button / меня никто не звал ');
        assert (button.click, 'Ура! я создан для того чтобы рассказать о нажатии');
    };
}
var button = new Button();
var elem  = document.getElementById('test');                
elem.addEventListener('click', button.click);                   // Вспомогательный button-объект где будет храниться последнее состояние нажатия кнопки

// назначение контекстов функции с помощью методов apply() call()

function juggle() {
    var result = 0;
    for (var n=0; n<arguments.length; n++){
        result += arguments[n];
    }
    this.result = result;
}

var agent1 = {}; // для тестирования
var agent2 = {}; 

juggle.apply(agent1, [1,2,3,4]);
juggle.call(agent2, 5,6,7,8);

assert(agent1.result === 10, "return via apply: " + agent1.result );
assert(agent2.result === 26, "return via call: " + agent2.result );
