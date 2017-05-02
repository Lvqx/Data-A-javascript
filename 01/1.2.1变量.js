// js类型
// 数字、字符串、布尔、函数、对象、undefined、null 数组、日期、正则
//null 变量没有值 undefined 变量已被声明，但尚未赋值
var num = 1;
num = 3;

var price = 1.5;
var name = 'Packt';
var trueValue = true;
var nullVar = null;
var und;

console.log('num: '+ num); //3
console.log('name: '+ name); //Packt
console.log('trueValue: '+ trueValue); //true
console.log('nullVar: '+ nullVar); //null
console.log('und: '+ und); //undefined

/**
 * 变量作用域
 */
var myVaribale = 'global';
myOtherVaribale = 'global';

function myFunction() {
    var myVaribale = 'local';
    return myVaribale;
}

function myOtherFunction() {
    myOtherVaribale = 'local';
    return myOtherVaribale;
}

console.log(myVaribale); //global
console.log(myFunction()); //local
console.log(myVaribale); //global

console.log(myOtherVaribale); //global
console.log(myOtherFunction()); //local
console.log(myOtherVaribale); // local