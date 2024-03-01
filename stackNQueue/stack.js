class Stack {
    constructor() {
        this.items = [];
        this.top = 0;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if(!this.isEmpty()) return this.items.pop();
        return -1;
    }

    top() {
        if(!this.isEmpty()) return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    print() {
        if(!this.isEmpty()) return this.items.toString();
        return -1;
    }
}

const stack = new Stack();
stack.push(11);
stack.push(22);
stack.push(33);
console.log(stack.print());
console.log(stack.top());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size())