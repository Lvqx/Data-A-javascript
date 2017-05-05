
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.reverse();
console.log(numbers);

numbers.sort();
console.log(numbers);

numbers.sort(function (a, b) {
    return a - b;
})
// console.log(numbers);

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
numbers.sort(compare);
console.log(numbers);



//自定义排序
var friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'John', age: 25 }
];

function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
}

console.log(friends.sort(comparePerson));

console.log('---------------');

var names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort());

names.sort(function (a, b) {
    if (a.toLocaleLowerCase() < b.toLocaleLowerCase) {
        return -1;
    }
    if (a.toLocaleLowerCase > b.toLocaleLowerCase) {
        return 1;
    }
    return 0;
})

var names2 = ['Maève', 'Maeve'];
console.log(names2.sort(function (a, b) {
    return a.localeCompare(b);
}));

console.log('----------------')
console.log(numbers);
console.log(numbers.indexOf(10));
console.log(numbers.indexOf(100));
numbers.push(10);
console.log(numbers.lastIndexOf(10));
console.log(numbers.lastIndexOf(100));


