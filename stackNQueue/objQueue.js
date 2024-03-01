class Queue{
    constructor() {
        this.list = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element) {
        this.list[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        if(this.isEmpty()) return -1;
        delete this.list[this.front];
        this.front++;
    }

    size() {
        return this.rear - this.front;
    }

    isEmpty() {
        return (this.rear - this.front) === 0;
    }

    peek() {
        if(this.isEmpty()) return -1;
        return this.list[this.front];
    }

    print() {
        if(this.isEmpty()) return -1;
        return Object.values(this.list)
    }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.peek());
console.log(q.print());
q.dequeue();
q.dequeue();
console.log(q.print());
console.log(q.isEmpty()); 
console.log(q.size());