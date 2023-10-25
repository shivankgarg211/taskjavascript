///////////////Word Reverse////////////////



var str = "this is my Word Reverse task";
var a = str.split(' ');
console.log(str)
a.reverse(a);
var b='';
for(let i=0; i<a.length; i++)
{
    b=b+a[i] +' ';
}
var shiv =b.length-1;
var c ='';
for(let i =l; i>=0; i--)
{
    c=c+b[i];
}
console.log(c)