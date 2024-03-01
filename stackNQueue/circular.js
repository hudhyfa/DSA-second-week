class Queue {
    constructor(capacity) {
        const circle = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.back = -1;
        this.front = -1;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    enqueue(element) {
        if(this.isFull()) {
            return null;
        } else {
            this.rear = this.rear + 1;
            this.circle[this.rear] = element;
            this.currentLength += 1;
            if(this.front === -1) this.front = this.rear;
        }
    }

    dequeue(element) {
        if(this.isEmpty()) {
            return null;
        } else {
            delete this.circle[this.front];
            this.front += 1;
            this.currentLength -= 1;
            if(this.front === this.back) this.back = 0;
        }
    }
}