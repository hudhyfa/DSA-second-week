class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let index = 0;
        for(let i = 0; i < key.length; i++) {
            index += key.charCodeAt(i);
        }
        return index;
    }

    set(key, value) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if(!bucket) {
            this.table[index] = [[key, value]];
        } else {
            let alreadyPresent = bucket.find(arr => arr[0] === key);
            if(alreadyPresent) {
                alreadyPresent[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket) {
            let keyRay = bucket.find(arr => arr[0] === key);
            if(keyRay) return keyRay[1];
        }
        return undefined;
    }

    remove(key) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket) {
            let keyRay = bucket.find(arr => arr[0] === key);
            if(keyRay) {
                bucket.splice(bucket.indexOf(keyRay), 1);
            }
        }
    }
}

const table = new HashTable(50);
table.set("name", "hudyfa");
table.set("eman", "very low");
table.set("work ethic", "improved");
console.log(table.get("name"));
console.log(table.get("eman"));
table.remove("work ethic");
console.log(table.get("work ethic"));