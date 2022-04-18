
var set = new Set();

var nums = [1, 2, 3, 4];
for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
        for (var k = 0; k < nums.length; k++) {
            set.add([i, j, k]);
        }
    }
}


console.log(set);