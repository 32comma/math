function solution(numbers) {
    var set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    var set2 = new Set(numbers);
    var set3 = new Set([...set1].filter(x => !set2.has(x)));
    var arr = Array.from(set3);
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;

}
solution([5, 8, 4, 0, 6, 7, 9]);