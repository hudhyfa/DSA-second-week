function select(arr) {
    for(let i = 0; i < arr.length; i++) {
        let min = arr[i];
        let indice = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < min) {
                min = arr[j];
                indice = j;
            }
        }
        arr[indice] = arr[i];
        arr[i] = min;
    }
    return arr;
}

// best, avg, worst case O(n^2);
const result = select([4,3,78,44,223]);
console.log(result);