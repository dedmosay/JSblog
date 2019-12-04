/* глобальный объект window можно условно разделить на 3 части
DOM
BOM
JS   (global var.)
*/

var foo = 'String';

console.log(window.foo) 

console.log(navigator.userAgent) 
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1)..
console.log(navigator.platform) 
// MacIntel

console.log(screen);
// Screen {height: 900, width: 1440, colorDepth: 24, pixelDepth: 24, availLeft: 0, …}

console.log(location);
// Location {href: "file:///Users/ilinoa/Documents/git/JSblog/15%20-%2…0%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B0)/index.html", protocol: "file:", host: "", hostname: "", port: "", …}

console.log(frames);
// Window {document: #document, foo: "String", NaN: NaN, window: Window, Infinity: Infinity, …}

console.log(history);
// History {length: 6, scrollRestoration: "auto", state: null, back: function, forward: function, …}

//window.confirm('BOM');
// 'Cancel' or 'OK'

var bar = window.prompt();
// placeholder

if (bar === 'hi!') {
    alert('This ok')
} else {
    alert('Bay!')
}

