function Stack() {
    //保存栈里的元素
    var items = [];

    //添加一个或几个元素到栈顶
    this.push = function (element) {
        items.push(element);
    }

    //移除栈顶元素，同时返回被移除的元素
    this.pop = function (elment) {
        return items.pop();
    }

    //返回栈顶元素
    this.peek = function () {
        return items[items.length - 1];
    }

    //如果栈为空的话，返回true,否则返回false
    this.isEmpty = function () {
        return items.length == 0;
    }

    //返回长度
    this.size = function () {
        return items.length;
    }

    //清空
    this.clear = function () {
        items = [];
    }

    //展示栈元素
    this.print = function () {
        console.log(items.toString());
    }

}

function divideBy2(decNumber) {
    var remStack = new Stack(),
        rem,
        binaryString = '';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
    // console.log( binaryString);
}

// divideBy2(10);
