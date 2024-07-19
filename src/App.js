// src/App.js
import React from 'react';
import './App.css';
import Stopwatch from './Stopwatch';

function App() {
    return (
        <div className="App">
            <div className="background"></div>
            <div className="stopwatch-container">
                <Stopwatch />
            </div>
        </div>
    );
}

export default App;
