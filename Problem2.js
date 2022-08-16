function sumOfFibonacci(n) {
    let temp, sum = 0, a = 0, b = 1;
    while (b < n) {
        temp = a;
        a = b;
        b += temp;
        if ((b & 1) === 0) {
            sum += b;
        }
    }
    return sum;
}

console.log(sumOfFibonacci(4e6));