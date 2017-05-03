// 创建一个普通对象的两种方式

var obj = new Object();

var obj = {};

obj = {
    name: {
        first: 'Zhang',
        last: 'San'
    },
    address: 'Beijing'
}

function Book(title,pages,isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    // this.printTitle = function() {
    //     console.log(this.isbn);
    // }
}

var book = new Book('title','page','isbn');
console.log(book.title);
console.log(book.page);
console.log(book.isbn);

console.log('-------');

Book.prototype.printTitle = function() {
    console.log(this.title);
}
book.printTitle();
