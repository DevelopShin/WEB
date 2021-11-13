import './App.css';
import React, {Component} from 'react';
import Display from './Compononts/Display';
import Button from './Compononts/Button';
import TestDiv from './Compononts/test';

class App extends Component {
  constructor(props){
    super(props);
    this.state={  number:0 }
    // this.onClickHandler = this.onClickHandler.bind(this)/
  }

  onClickHandler=(num)=> {
    this.setState({number:this.state.number+num}) //bind, err handler
  }

  render() {
    const Num = this.state.number
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Display value={Num}/>
            </div>
            <div className="btnClass">
              <Button clickHandler={()=>this.onClickHandler(1)} > 증가</Button>
              <Button clickHandler={()=>this.onClickHandler(-1)} > 감소</Button>
          </div>

        </header>
      </div>
    );
  }
  }


export default App;
