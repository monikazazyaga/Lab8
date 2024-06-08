import React, { useState, useEffect } from 'react';

const TimerInfinite = () => {
    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isActive) {
            const timer = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [isActive]);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setIsActive(!isActive)}>{isActive ? '⏸️' : '▶️'}</button>
        </div>
    );
};

export default TimerInfinite;