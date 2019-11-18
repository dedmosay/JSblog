 var booll = false;

 if (!booll) {
     console.log("Hello World!")    // Hello World!
 }

 console.log(Boolean(NaN));         // false
 console.log(Boolean(""));          // false
 console.log(Boolean(0));           // false - 0    
 console.log(Boolean(undefined));   // false
 console.log(Boolean(null));        // false

 console.log(Boolean("s"));         // true
 console.log(Boolean(1));           // true - 1    

 var    program,
        obj = {},
        arr = [1,2,3];

console.log(program)                // undefined
console.log(obj.test)               // undefined
console.log(arr[9])                 // undefined

var func = function(arg) {
    console.log(arg)
}
func();                             // undefined

