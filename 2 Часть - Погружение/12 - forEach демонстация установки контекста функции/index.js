
function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}

function forEach(list, callback) {          // Итеративная функция, которая передается перебираемая коллекция и функция обратного 
    for (var n=0; n<list.length; n++){
        callback.call(list[n], n);
    }
}
var weapons = [ // коллекция
    { type : 'agent1' },
    { type : 'agent2' },
    { type : 'agent3' }
];
forEach(weapons, function(index){
    assert(this === weapons[index], "Got the expected value of " + weapons[index].type);
});