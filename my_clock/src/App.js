import React from 'react';
import './App.css';
import Countdown from './components/countDown/CountDown';
import DigitalClock from './components/digitalClock/DigitalClock';
import Stopwatch from './components/stopWatch/StopWatch';

function App() {
  return (
    <div className="App">
      <DigitalClock/>
      <Countdown/>
      <Stopwatch/>
    </div>
  );
}

export default App;
