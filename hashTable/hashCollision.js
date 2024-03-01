class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let newKey = 0;
        for(let i = 0; i < key.length; i++) {
            newKey += key.charCodeAt(i);
        }
        return newKey % this.size;
    }

    set(key, value) {
        let index = hash(key);
        const bucket = this.table[index];
        if(!bucket) {
            bucket = [[key, value]];
        } else {
            let oldKey = bucket.find(elem => elem[0] === key);
            if(oldKey) {
                oldKey[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        let index = hash(key);
        const bucket = this.table[index];
        if(bucket) {
            const result = bucket.find(elem => elem[0] === key);
            return result[1];
        }
        return undefined;
    }

    remove(key) {
        let index = hash(key);
        const bucket = this.table[index];
        if(bucket) {
            const result = bucket.find(elem => elem[0] === key);
            if(result) {
                bucket.splice(bucket.indexOf(result), 1);
            }
        }
        return undefined;
    }

    display() {
        for(let i = 0; i < this.table.length; i++) {
            if(this.table[i]) {
                console.log("hash table",this.table[i])
            }
        }
    }

}

