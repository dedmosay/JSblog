  

var arr = [1,'str',3],
    len = arr.length;

for (var i=0; i<len; i++) {
    console.log(arr[i])  
}
/*
1
str
3
*/

var obj = {
    prop: 'one',
    propSecond: 'two'
}
//  prop;

for (prop in obj) {
    console.log(prop + ':' + obj[prop])
}
/*
prop:one
propSecond:two  
*/

var animals = {
    cat : 'may',
    dog : 'gav'
}


// проверка на принадлежность свойства к этому объекту
// отностится к прототипному наследованию
for (prop in animals) {
    if(animals.hasOwnProperty(prop)){
        console.log( prop + ' : ' + animals[prop])
    }
}

var k = 0;
while (k < 4) {
    console.log(k++)
}


var t=0;
do{
    console.log(t++);
}while(t<5)