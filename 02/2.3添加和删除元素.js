var numbers = [0,1,2,3,4,5,6,7,8,9];

//1
numbers[numbers.length] = 10;

//2 push 把元素添加到数组的末尾
numbers.push(11);
numbers.push(12,13);

console.log(numbers);
//3unshift
for(var i = numbers.length; i>=0; i--) {
    numbers[i] = numbers[i-1];
}
numbers[0] = -1;

console.log('------')
console.log(numbers);
console.log('------')
numbers.unshift(-2);
numbers.unshift(-4,-3);
console.log(numbers);
console.log('------');
//pop
numbers.pop();
console.log(numbers);
console.log('------1');

//unshift
// for(var i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i+1];
// }
//console.log(numbers);
//[ -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, undefined ]
numbers.shift();
console.log(numbers);
console.log('------');

//splice
numbers.splice(5,3);//删除
console.log(numbers);
numbers.splice(5,0,2,3,4);//插入
console.log(numbers);
numbers.splice(5,3,1,1,1);//替换
console.log(numbers);