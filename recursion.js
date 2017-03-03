/**
 * Created by sean on 03/03/17.
 */
/*
 Define a recursive function isEven corresponding to this description.
 The function should accept a number parameter and return a Boolean.
 */

function isEven(n){
    if(n == 0)
        return true;
    else if(n ==1)
        return false;
    else if(n < 0)
        return isEven(-n);
    else
        return isEven(n - 2)
}


console.log(isEven(0));