import React from 'react';
import TimerReverse from './components/TimerReverse';
import TimerInfinite from './components/TimerInfinite';
import PrimeNumbers from './components/PrimeNumbers';
import Revert from './components/Revert';

const App = () => {
    return (
        <div>
            <h1>Обратный таймер</h1>
            <TimerReverse />
            
            <h1>Таймер от 0 до бесконечности</h1>
            <TimerInfinite />
            
            <h1>Вывод простых чисел</h1>
            <PrimeNumbers />
            
            <h1>Разворот строки</h1>
            <Revert s="привет!" />
        </div>
    );
};

export default App;
