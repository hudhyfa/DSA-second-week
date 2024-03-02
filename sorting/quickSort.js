function quickSort(arr) {
    if(arr.length < 2) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for(let i = 0; i < arr.length - 1; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// * worst case O(n^2).
// * avg case O(nlogn).
 

const result = [2,-9,66,5,9,-9,1,99];
console.log(quickSort(result));
