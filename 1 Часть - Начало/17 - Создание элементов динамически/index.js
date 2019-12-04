(function () {
    var doc = document;
    var elem = doc.createElement("p"), // создатель узел элемента
        content = doc.createTextNode("Это динамично созданный текст"),  // создатель текстовый
        wrappedP = doc.getElementById("wrapped");
        elem.innerHTML = '<strong>Hello World</strong>';

    //  elem.appendChild(content);
    //  elem.id='mrDynamic';
    
    
    //wrappedP.parentNode.appendChild(elem)
    /*
        1st p
        2nd p
        3rd p
        4th p
        5th p
        
        Это динамично созданный текст добавляет в указаное место
    */


    //wrappedP.parentNode.insertBefore(elem, wrapped)
    /*
        1st p
        2nd p
        3rd p
        4th p
        Это динамично созданный текст
        5th p

        Вставка перед элементом wrappedP
    */


    //wrappedP.parentNode.replaceChild(elem, wrappedP)
    /*
        1st p
        2nd p
        3rd p
        4th p
        Это динамично созданный текст
        
        Заменить элемент id="wrapped" 5th p
    */

    //wrappedP.parentNode.removeChild(wrappedP);
    /*
        1st p
        2nd p
        3rd p
        4th p

        // Удаление wrappedP
    */

    console.log(elem)

})();