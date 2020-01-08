import React from 'react';
import './App.css';
import News from  './components/feed-block/Feed-block.component';
import Clock from  './components/clock/clock.component';
import Background from './components/background/background.component'

///TODO add drag & drop grid
// https://codepen.io/tjramage/pen/yOEbyw

///TODO write a tests
///https://airbnb.io/enzyme/
function App() {
  return (
      <React.Fragment>
        <Clock/>
        <News/>
        <Background/>
      </React.Fragment>
  );
}
// <Credits/>
export default App;
