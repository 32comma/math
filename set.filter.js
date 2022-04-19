function solution(numbers) {
    var set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    var set2 = new Set(numbers);
    var set3 = new Set([...set1].filter(x => !set2.has(x)));
    console.log(set3);

}
solution([5, 8, 4, 0, 6, 7, 9]);