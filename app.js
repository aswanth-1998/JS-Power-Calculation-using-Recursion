var fs = require('fs');

var input=fs.readFileSync('input.txt').toString().split('\n');
var a = Number(input[0]);
var b = Number(input[1]);

var val = function(n,p) 
{
   if (p == 0) 
   {
    return 1;
    }
  else 
  {
    return n * val(n,p-1);
  }
};
console.log(val(a,b));
