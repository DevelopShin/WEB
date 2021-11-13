import './css/App.css';
import React, {Component, useState} from 'react';
import Display from './Compononts/Display';
import Button from './Compononts/Button';

function App() {

  let [num, setNum]=useState(0);
  const [text, setText] = useState("");
  const onChange = (e) =>{
    setText(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Display value={num}/>
          </div>
          <div className="btnClass">
            <Button clickHandler= {()=>{setNum(num+1)}} > 중가 </Button>
            <Button clickHandler= {()=>{setNum(num-1)}} > 감소 </Button>
  
        </div>

        <div>
          <input type="text" onChange={onChange} value={text}></input>
          <div>{text} </div>
        </div>
      </header>
    </div>
  );
  }



export default App;
