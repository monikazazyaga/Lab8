import React, { useState, useEffect } from 'react';

const Revert = ({ s }) => {
    const [revertedString, setRevertedString] = useState(s);

    useEffect(() => {
        const timer = setInterval(() => {
            setRevertedString(prevString => {
                const lastChar = prevString.charAt(prevString.length - 1);
                const newString = lastChar + prevString.substring(0, prevString.length - 1);
                return newString;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [s]);

    return <div>{revertedString}</div>;
};

export default Revert;