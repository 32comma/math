function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    var m = Math.sqrt(n); 
    for (var i = 2; i <= m; i++)
        if (n % i == 0) return false;
    return true;
}

function solution(nums) {
    var answer = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                var value = nums[i]+nums[j]+nums[k];
                if (isPrime(value)) {
                    answer++;
                }
            }
        }
    }
    console.log(answer);
    return answer;

}
solution([1, 2, 3, 4]);