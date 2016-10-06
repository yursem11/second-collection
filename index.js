/*function fibonacci (n){
    var num;
    if (n >= 2) {
        num = fibonacci(n-1) + fibonacci(n-2);
            }
            else {
                num = n;
            }
}
alert(fibonacci(10));*/

var n = 15;
var fibonacci = [0, 1];
for (i = 2; i < n; i ++) {
    fibonacci [i] = fibonacci[i-1] + fibonacci[i-2];
    }
    console.log(fibonacci.slice(0,n));


