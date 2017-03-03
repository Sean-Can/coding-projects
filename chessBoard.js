/**
 * Created by sean on 03/03/17.
 */
// loop prints out a chess style board using specified size.
var size = 8;
var board = '';

for(var y = 0; y < size; y++)
{
    for(var x = 0; x < size; x++)
    {
        if((x + y) % 2 == 0)
        {
            board += ' '
        }
        else
        {
            board += '#'
        }
    }
    board += '\n';
}

console.log(board);