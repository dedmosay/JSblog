(function (){
    var div = document.getElementById('test');
    //var style = div.style;
/*
    Так делать не надо!

    style.color = "red";
    style.backgroundColor = "black";
    style.border = "1px solid blue";    

    стили должны находиться в CSS
*/

    // приминение стилей
    //div.className = " css-class ";   


    // удаление стилей
    //div.className = div.className.replace(" css-class ", "")


    div.classList.add('css-class');
    // Применит стиль

    div.classList.remove('css-class');
    // Удалит стиль

    div.classList.toggle('css-class');
    // Переключатель. Если был удален то добавит
    // Если был добавлен, то удалит
})();
