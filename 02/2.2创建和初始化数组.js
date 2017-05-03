// var daysOfWeek = new Array();
// var daysOfWeek = new Array(7);//指定数组的长度
// var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

var daysOfWeek = [];
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',  'Thursday', 'Friday', 'Saturday']; 

console.log(daysOfWeek.length);

for(var i = 0; i<daysOfWeek.length;i++) {
    console.log(daysOfWeek[i]);
}

console.log('---------')
// ：求斐波那契数列的前20个数字。已知斐波那契数列中第一个数字是1， 第二个是2，从第三项开始，每一项都等于前两项之和
var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 2;

for(var i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

for(var i = 1; i < fibonacci.length;i++) {
    console.log(fibonacci[i]);
}