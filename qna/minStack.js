class Stack {
    constructor() {
        this.items = new Array();
        this.min = new Array();
        this.top = 0;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    push(element) {
        this.items.push(element);
        if(this.top === 0) {
            this.min.push(element);
        } else {
            if(element < this.min[this.top - 1]) {
                this.min.push(element);
            } else {
                this.min.push(this.min[this.top - 1])
            }
        }
        this.top += 1;
    }

    pop() {
        if(!this.isEmpty()) {
            this.items.pop();
            this.min.pop();
            this.top--;
        } else {
            return -1;
        }
    }

    t() {
        if(!this.isEmpty()) return this.items[this.top - 1];
    }

    getMin() {
        if(!this.isEmpty()) return this.min[this.top - 1];
    }

    size() {
        return this.items.length;
    }

    print() {
        if(!this.isEmpty()) return this.items.toString();
        return -1;
    }

    logMin() {
        return this.min.toString();
    }
}

const stack = new Stack();
stack.push(11);
stack.push(22);
stack.push(33);
stack.push(1);
console.log(stack.logMin());
console.log(stack.getMin());