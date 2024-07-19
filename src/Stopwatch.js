// src/Stopwatch.js
import React, { useState, useEffect, useRef } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if (running) {
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }

        return () => clearInterval(timerRef.current);
    }, [running]);

    const formatTime = (time) => {
        const getSeconds = `0${(time % 60)}`.slice(-2);
        const minutes = `${Math.floor(time / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

        return `${getHours} : ${getMinutes} : ${getSeconds}`;
    };

    return (
        <div className="stopwatch">
            <h1>Stopwatch</h1>
            <div className="display">{formatTime(time)}</div>
            <div className="buttons">
                <button onClick={() => setRunning(true)}>Start</button>
                <button onClick={() => setRunning(false)}>Pause</button>
                <button onClick={() => {
                    setRunning(false);
                    setTime(0);
                }}>Reset</button>
            </div>
        </div>
    );
};

export default Stopwatch;
