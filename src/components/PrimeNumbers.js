import React, { useState, useEffect } from 'react';

const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
};

const PrimeNumbers = () => {
    const [primes, setPrimes] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            let nextPrime = primes.length > 0 ? primes[primes.length - 1] + 1 : 2;
            while (!isPrime(nextPrime)) {
                nextPrime++;
            }
            setPrimes(prevPrimes => [...prevPrimes, nextPrime]);
        }, 1000);

        return () => clearInterval(interval);
    }, [primes]);

    return <div>{primes.join(', ')}</div>;
};

export default PrimeNumbers;