import React, { useState, useEffect } from 'react';

const TimerReverse = () => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => (prevCount <= 1 ? 0 : prevCount - 1));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return <div>{count}</div>;
};

export default TimerReverse;