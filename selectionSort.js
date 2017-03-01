/**
 * Created by sean on 01/03/17.
 */
// selection sort function

function selectionSort(array)
{
    var length = array.length;
    var min = 0;
    var temp;
    // loop through entire array swapping smallest value with the first value in array.
    for(var i = 0; i < length; i++)
    {
        min = i;
        for(var j = i + 1; j < length; j++)
        {
            if(array[j] < array[min])
            {
               min = j;
            }

        }
        temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

var array = [5, 3, 6, 2, 10];

console.log(selectionSort(array));