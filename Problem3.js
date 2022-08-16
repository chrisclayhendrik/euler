function largestPrime(n) {
    let d = Math.ceil(Math.sqrt(n));

    function isPrime(n) { 
        let i, x = Math.ceil(Math.sqrt(n));
        for (i = 3; i <= x; i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    d = (d & 1) === 0 ? d - 1 : d;

    while (!(n % d === 0 && isPrime(d))) {
        d -= 2;
    }
    return d;
}

console.log(largestPrime(600851475143));