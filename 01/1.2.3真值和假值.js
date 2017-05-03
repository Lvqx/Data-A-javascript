/**
 *   数值类型        转换成布尔值
 *      undefined       false
 *      null            false
 *      布尔值          true是true,false是flase
 *      数字            +0，-0和NaN是false,其他都是true
 *      字符串          字符串是空是false，其他都是true
 *      对象            true 
 */

function testTruthy(val) {
    return val ? console.log('truthy') : console.log('falsy');
}

testTruthy(true); //true 
testTruthy(false); //false 
testTruthy(new Boolean(false)); //true (对象始终为true) 

testTruthy(''); //false 
testTruthy('Packt'); //true 
testTruthy(new String('')); //true (对象始终为true) 

testTruthy(1); //true 
testTruthy(-1); //true 
testTruthy(NaN); //false 
testTruthy(new Number(NaN)); //true (对象始终为true) 

testTruthy({}); //true (对象始终为true) 

var obj = {name:'John'}; 
testTruthy(obj); //true 
testTruthy(obj.name); //true 
testTruthy(obj.age); //false (年龄不存在) 

console.log('-------------')
var person1 = {name: 'zhangsan'}
var person2 = {name: 'lisi'}

console.log(person1 === person2);
