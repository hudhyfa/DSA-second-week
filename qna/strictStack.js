// * Q) construct an array stack class and implement all methods without using built in methods.
// * Ans:
class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(element) {
        this.top += 1;
        this.items[this.top] = element;
    }

    pop() {
        if(this.top === -1) return -1;
        delete this.items[this.top];
        this.top -= 1;
    }

    t() {
        if(this.top === -1) return -1;
        return this.items[this.top];
    }

    size() {
        return this.top + 1;
    }

    print() {
        if(this.top === -1) return -1;
        let stck = "";
        for(let i = 0; i <= this.top; i++) {
            stck += `${this.items[i]} `;
        }
        console.log(stck);
    }
}

const stack = new Stack();

stack.push(11);
stack.push(22);
stack.push(33);
stack.print();
console.log(stack.size());

stack.pop();
stack.pop();
stack.print();
console.log(stack.t());






