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

    push(elem) {
        const node = new Node(elem);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    pop() {
        if(this.isEmpty()) return null;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
    }

    top() {
        if(this.tail === null) return null;
        return this.tail.val;
    }

    print() {
        if(this.isEmpty()) return null;
        let curr = this.head;
        let res = "";
        while(curr) {
            res += `${curr.val} `;
            curr = curr.next;
        }
        console.log(res);
    }
}

const stack = new LinkedList();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log(stack.top());
stack.pop();
stack.pop();
stack.print();
console.log(stack.top());
stack.pop();
console.log(stack.print());
console.log(stack.pop());
