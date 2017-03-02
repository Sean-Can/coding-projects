/**
 * Created by sean on 02/03/17.
 */
// Divide and Conquer..

// code found on pg 56

/*function sum(array)
{
    var length = array.length;
    var total = 0;

     for(var i = 0; i < length; i++)
    {
        total += array[i];

    }
    return total;
}
*/

// exercise 4.1 write a recursive sum function.
function sum(array)
{
    if(array.length === 0)
    {
        return 0;
    }else
    {
        return array.shift() + sum(array);
    }
}
console.log(sum([1, 2, 3, 4, 5, 6]));

// exercise 4.2 write a recursive function to count the number of items in an array.

function count(array)
{
    if(array.length === 0)
    {
        return 0;
    }
    else
    {
        // for each pass add 1 then remove 1 item from array
        array.shift();
        return  1 + count(array);
    }
}
console.log(count([1, 2, 3, 4, 5]));


// exercise 4.3 write a function to find the largest number in an array

function max(array)
{
    // if only 1 item in array return its value
    if(array.length == 1)
    {
        return array[0];
    }
    else
    {
        return Math.max(array.shift(), max(array));
    }

}

console.log(max([54, 102, 54, 665]));