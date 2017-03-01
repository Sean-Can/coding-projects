/**
 * Created by sean on 01/02/28
 */
// Binary Search function tested by finding a  number in an array.
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

var myArray = [2, 4, 6, 8, 10, 12]

var result = binarySearch(myArray, 10);
if(result >= 0){
    console.log("Found value at index " + result);
}else{
    console.log('Value not found');
}
