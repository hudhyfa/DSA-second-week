class Queue {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if(! this.isEmpty()) return this.items.shift();
        return -1;
    }

    peek() {
        if(! this.isEmpty()) return this.items[0];
        return -1;
    }
}

class Stack {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }

    push(element) {
        this.q2.enqueue(element);
        while(this.q1.isEmpty()) {
            this.q2.enqueue(this.q1.dequeue());
        }
        let temp = [...this.q1];
        this.q1 = [...this.q2];
        this.q2 = [...temp];
    }
}