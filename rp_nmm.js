function run(n) {
    n++;
    if (n > 10) {
        return 0;
    } else {
        console.log(n);
        run(n);
    }

}
run(0);