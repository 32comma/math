function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    if (n % 2 == 0) return (n == 2);
    var m = Math.sqrt(n);
    for (var i = 3; i <= m; i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}

function run(n) {
    --n;
    if (n == 0) {
        return 0;
    } else {
        console.log(n + ":" + isPrime(n));
        run(n);
    }

}
run(10);