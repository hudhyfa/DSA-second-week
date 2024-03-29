function mergeSort(arr) {
    if(arr.length < 2) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let sortedArr = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...right, ...left];
}

// Time complexity is O(nlogn);

console.log(mergeSort([1,29,8,23,13,12,93,123]));

function ms(arr) {

    if(arr.length < 2) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return m(ms(left), ms(right));

}

function m(left, right) {

    let sortedRay = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            sortedRay.push(left.shift());
        } else {
            sortedRay.push(right.shift());
        }
    }

    return [...sortedRay, ...left, ...right];
}