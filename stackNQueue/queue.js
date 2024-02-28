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

    size() {
        return this.items.length;
    }

    print() {
        if(!this.isEmpty()) return this.items.toString();
        return -1;
    }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.print());
console.log(q.peek());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.print());