function smallestDivisible(x) {
    let i, n = 1;

    function largestExponent(n, x) {
        let p, e = 2, largest = n;
        while ((p = Math.pow(n, e)) <= x) {
            largest = p;
            e += 1;
        }
        return largest;
    }

    function isPrime(n) {
        let i, x = Math.ceil(Math.sqrt(n));
        for (i = 3; i <= x; i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (i = 3; i <= x; i += 2) {
        if (isPrime(i)) {
            n *= largestExponent(i, x);
        }
    }

    return n * largestExponent(2, x);
}

console.log(smallestDivisible(20));
