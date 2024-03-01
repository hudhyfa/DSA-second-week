class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head === null;
    }

    enqueue(elem) {
        const node = new Node(elem);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            console.log(this.tail.val);
            this.tail.next = node;
            this.tail = node;
        }
    }

    dequeue() {
        if(this.isEmpty()) return null;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return 1;
        }
        if(this.head.next) {
            this.head = this.head.next;
        } 
    }

    peek() {
        return this.head.val;
    }

    print() {
        if(this.isEmpty()) {
            return null;
        } else {
            let curr = this.head;
            let res = "";
            while(curr) {
                res += `${curr.val}`;
                curr = curr.next;
            } 
            console.log(res);
        }
    }
}

const list = new LinkedList();
list.enqueue(1);
list.enqueue(2);
list.enqueue(3);
list.print();
list.dequeue();
list.dequeue();
list.print();
list.dequeue();
console.log(list.dequeue());
list.enqueue(1);
list.print();
console.log(list.peek());
