function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    var m = Math.sqrt(n); //returns the square root of the passed value
    for (var i = 2; i <= m; i++)
        if (n % i == 0) return false;
    return true;
}
function solution(nums) {

    var set = new Set();
    var nums = [1, 2, 3, 4];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i; j < nums.length; j++) {
            for (var k = j; k < nums.length; k++) {
                set.add([nums[i], nums[j], nums[k]]);
            }
        }
    }
    console.log(set);
    var arr = Array.from(set);
    var set2 = new Set();
    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        for (var j = 0; j < arr[i].length; j++) {
            var d = arr[i][j];
            sum += d;
            set2.add(sum);
        }
    }
    var arr2 = Array.from(set2);
    console.log(arr2);
    var answer = 0;
    for (var i = 0; i < arr2.length; i++) {
        if (isPrime(arr2[i])) {
            answer++;
        }
    }
    console.log(answer);
    return answer;
}
solution([1,2,3,4]);