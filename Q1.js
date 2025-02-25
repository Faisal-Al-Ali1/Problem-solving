class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        return this.stack.pop();
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

function reverseArray(arr) {
    
    let stack = new Stack();

    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = stack.pop();
    }

    return arr;
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Q1 Original Array:", arr);
console.log("Q1 Reversed Array:", reverseArray(arr));
