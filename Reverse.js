/// Reverse string

var app=  "this is my reverse string task";
var reverse = [""];
for (i = app.length -1 ; i >= 0 ; i--){
    reverse = reverse +app[i]
}
console.log(reverse);