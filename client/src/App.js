import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [size, setSize] = useState(72);
  const [color, setColor] = useState('#000000');

  let colorStyle = {color: color};
  let sizeStyle = {'font-size': `${size}px`};

  return (
    <div className="App">
      <div className='left border'>
        <input type='range' min="12" max="72" onChange={e => setSize(e.target.value)} ></input>
        <input type='color' onChange={e => setColor(e.target.value)}></input>
        {/* <input type='text'></input> */}
      </div>

      <div className='right border'>
        <img src='https://render.fineartamerica.com/images/images-clothing-body-styles/35-9.png' />
        <div className=' view'>
            <p  id='viewText' contentEditable='true' style={{...sizeStyle , ...colorStyle}}>Text 1</p>
        </div>
      </div>
    </div>
  );
}

export default App;
