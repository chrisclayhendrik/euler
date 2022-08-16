
function sumOfMultiple(n) {
    var i, sum = 0;
    for (i = 3; i < n; i += 1) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfMultiple(1000));