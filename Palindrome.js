////Palindrome///


var string =121;

var len =string.length;
var msg = 'true'///it is palindrome
for ( var i=0; i< len/2; i++ )
{
if(string[i] != string[len - 1 - i]){
 msg = 'false' //it is not palindrome
}
}
console.log(`${string}:${msg}`);

/////////////////////////////////////////////////////////////////////////


let str = "abccba"
function ispalindrome(str){
    let left = 0;
    let right= string.length-1;

    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(ispalindrome(string));