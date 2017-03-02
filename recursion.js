/**
 * Created by sean on 02/03/17.
 */
// code and notes related to recursion found in the Grokking Algorithms book.

// code found on page 41
function countdown(i)
{
    console.log(i);
    // without a base case this function will run forever
    if(i <= 0)
    {
        return
    }else
    {
        countdown(i - 1);
    }

}

countdown(10);


// code for call stack. found on pg 43
function greet(name)
{
    console.log('Hello, ' + name);
    greet2(name);
    console.log('Getting ready to say bye');
    bye();
}

function greet2(name)
{
    console.log('How are you ' + name);

}
function bye()
{
    console.log('ok, bye!');
}
greet('Sean');

// the call stack with recursion found on pg 45

function fact(x)
{
    if( x == 1)
    {
        return 1;
    }else
    {
        return x * fact(x - 1);
    }
}
console.log(fact(3));
