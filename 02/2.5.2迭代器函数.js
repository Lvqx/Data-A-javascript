// 。假如有 一个数组，它值是从1到15，如果数组里的元素可以被2整除（偶数），函数就返回true，否则返 回false： 
var isEven = function(x) {
    //如果x是2的倍数，就返回true
    console.log(x);
    return (x % 2 == 0) ? true : false;
    // return (x % 2 == 0)
}

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

numbers.every(isEven);
numbers.some(isEven);

console.log('------')
numbers.forEach(function(x) {
    console.log((x%2==0));
});

var myMap = numbers.map(isEven);
console.log('-------');

var evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
console.log('******');

numbers.reduce(function(previous,current) {
    return previous + current;
}); // 返回120




