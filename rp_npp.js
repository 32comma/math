function run(n) {
    --n;
    if (n == 0) {
        return 0;
    } else {
        console.log(n);
        run(n);
    }

}
run(10);