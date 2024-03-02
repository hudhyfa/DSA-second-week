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
        this.top++;
    }

    pop() {
        if(!this.isEmpty()) {
            this.items.pop();
            this.top--;
        }
        return -1;
    }

    top() {
        if(!this.isEmpty()) return this.items[this.items.length - 1];
    }
}

class Queue {
    constructor() {
        this.s1 = new Stack()
        this.s2 = new Stack()
    }

    enqueue(element) {
        while(this.s1.isEmpty()) {
            this.s2.push(this.s1.pop());
        }
        this.s1.push(element);
        while(this.s2.isEmpty()) {
            this.s1.push(this.s2.pop());
        }
    }

    dequeue() {
        this.s1.pop
    }

}