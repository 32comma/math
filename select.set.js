var set = new Set();

var nums = [1, 2, 3, 4];
for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
        for (var k = j + 1; k < nums.length; k++) {
            set.add([nums[i], nums[j], nums[k]]);
        }
    }
}


console.log(set);