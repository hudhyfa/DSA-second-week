function bubble(arr) {
    while(0 < 1) {
        let swapped = false;
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] < arr[i + 1]) {   // change the condtion to get ascending as well as descending order.
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        if(!swapped) return arr;
    }
}

//time complexity: O(n^2);
//space complexity: O(1);

const result = bubble([-6,8,3,-1,9,4]);
console.log(result);