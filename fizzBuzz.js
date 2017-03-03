/**
 * Created by sean on 03/03/17.
 */
/* Program that prints numbers 1 to 100 and if number is divisible by 3 print 'Fizz'
  if divisible by 5 prints 'Buzz' and if it is divisible by both 3 and 5 prints 'FizzBuzz'
   */
for(var i = 1; i <= 100; i++)
{
    var output = '';
    if(i % 3 === 0)
    {
        output += 'Fizz' ;
    }
    if( i % 5 === 0)
    {
        output += 'Buzz';
    }

        console.log(output || i);


}