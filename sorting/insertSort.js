
function insertSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;

        //* if you want in ascending order check all the elements in the sorted array is greater than the number to insert,
        //* so you can stop where the element is greater than the number to insert and then insert the NTI to the right of the element
        //* by that time every element in the sorted array will be moved to the right index of em, which gives us the space to insert,
        //* NTI to the right index of the element.
        //* for descending check element in the sorted array which is smaller than the number to insert.

        while(j >= 0 && arr[j] >= numberToInsert) {  
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j+1] = numberToInsert;
    }
    return arr;
}

// * time complexity: O(n^2); (worst case) in best case(O(1));
// * space complexity: O(1);

let result = insertSort([-7,10,4,-2,1,1,66,11]);
console.log(result);

