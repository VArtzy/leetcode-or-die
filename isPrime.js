const isPrime = (n) => {
    const compose = []
    let i = 2
    while (i < n) {
        for (let num of compose) {
            if (n % num === 0) return false
        }
        if (n % i === 0) compose.push(i)
        i++
    }
    return true
};

console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(6))
console.log(isPrime(2017))
console.log(isPrime(2048))
