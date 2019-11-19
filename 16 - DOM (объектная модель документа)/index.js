(function() {
    var elem = document.getElementsByTagName('p'); // NodeList
    var classElem = document.getElementsByClassName('one');  
    var idElem
    for (var i=0, len = elem.length; i<len; i++) {
        console.log(elem[i].tagName)
        console.log(elem[i].parentNode )   
        console.log(elem[i].previousElementSibling); 
        console.log(elem[i].nextElementSibling);
        
        console.log(elem[i].previousSibling.nodeName); 
        // #text    
        console.log(elem[i].nodeType); // 1
    }

    console.log(elem); 
    /*  
        HTMLCollection [
            <p class="one">, 
            <p>, 
            <p class="two">, 
            <p>
        ]
    */
 
    console.log(classElem); 
    /*  
        HTMLCollection [
            <p class="one">
        ]
    */
    console.log(document.querySelector("div").childNodes);
    /*
        #text " "
        1 <p class="two">Three</p>
        2 #text " "
        3 <p>Four</p>
        4 #text " "
    */ 

   console.log(document.querySelector("div").children);
   /*
        0 <p class="two">Three</p>
        1 <p>Four</p>
   */
 
  console.log(document.querySelector("div").firstChild);    // #text " "
  console.log(document.querySelector("div").lastChild);     // #text " "


  console.log(document.querySelector("div").innerHTML );
  /*
        <p class="two">Three</p>
        <p>Four</p>
  */      
})(); 

 