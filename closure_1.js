"use strict";

var isPrime = (function isPrime_w_storage() {
    var prime_storage = {};

    function isPrime(v) {
        if (!(v in prime_storage)){
            let prime = true;
            if (v % 2 == 0 || v % 3 == 0) {
                prime = false;
            }
            let vSqrt = Math.sqrt(v);
            for (let i = 5; i <= vSqrt; i += 6) {
                if (v % i == 0 || v % (i + 2) == 0) {
                    prime = false;
                }
            }
            if (v <= 3) {
                prime = true;
            }
            prime_storage[v] = prime;
        }
        return prime_storage[v];
    }
    return isPrime;
})();

var factorize = (function factorize_w_storage(){
    var factorize_storage = {};

    function factorize(v) {
        if (!(v in factorize_storage)){
            let tmp_factorize = [v]
            if (!isPrime(v)) {
                let i = Math.floor(Math.sqrt(v));
                while (v % i != 0) {
                    i--;
                }
                tmp_factorize = [
                    ...factorize(i),
                    ...factorize(v / i)
                ];
            }
            factorize_storage[v] = tmp_factorize;
        }
        return factorize_storage[v];
    }
    return factorize;
})();

console.log(factorize(148));
