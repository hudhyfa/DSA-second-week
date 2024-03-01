// In this case collision will occur.

class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for(let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        this.table[index] = value;
    }

    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }

    remove(key) {
        const index = this.hash(key);
        this.table[index] = undefined;
    }

    display() {
        for(let i = 0; i < this.table.length; i++) {
            if(this.table[i]) {
                console.log("hash table",this.table[i])
            }
        }
    }
}

const htable = new HashTable(50);
htable.set("name", "hudyfa");
htable.set("year", 2024);
htable.set("salary", "not disclosable");
htable.display();

htable.set("name", "muhammad hudhaifa");
console.log(htable.get("name"));