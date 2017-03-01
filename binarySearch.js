/**
 * Created by sean on 01/02/28
 */
// Binary Search function tested by finding a prime number in an array.
function binarySearch(array, targetValue){
    var min = 0;
    var max = array.length - 1;
    var mid;

    // execute loop until entire array is searched
    while(min <= max) {
        mid = Math.floor((max + min) / 2);

        if (array[mid] === targetValue) {
            return mid;
        }
        // if mid value is less than target search right side of array
        else if (array[mid] < targetValue) {
            min = mid + 1;
        }
        // else search the left side
        else {
            max = mid - 1;
        }

    }


    return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = binarySearch(primes, 97);
if(result >= 0){
    console.log("Found prime at index " + result);
}else{
    console.log('Value not found');
}
