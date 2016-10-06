var n = 20;
var fibonacci = [1, 2];
for (i = 2; i < n; i ++) {
    fibonacci [i] = fibonacci[i-1] + fibonacci[i-2];
    }
alert(fibonacci.slice(0,n));


