/**
 * Created by sean on 03/03/17.
 */
function countChar(string, ch){
    var length = string.length;
    var total = 0;
    for(var c = 0; c < length; c++){
        if(string.charAt(c) == ch)
             total += 1;
    }
    return total;
}

function countBs(string){
    return countChar(string, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
