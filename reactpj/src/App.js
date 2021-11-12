
import React, {useState} from 'react';
import './App.css';
import PersonInfo from "./components/Comp";

class App extends React.Component {
  state = {
      person:[
          {name:"홍길동", age:"13"},
          {name:"홍길농", age:"14"},
          {name:"홍길공", age:"15"},
          {name:"홍길상", age:"16"},
      ]
    }
  render() {
    const {person} = this.state;
    function myName(){
      console.log("DeveloShin")
    }
    return (
      <div className="App">
        <div>
          <h1>{this.props.test}</h1>
        </div>
        <PersonInfo name={person[1].name} age={person[1].age} myFun={myName}>
          <h2 className='child'>안녕하쇼!</h2>
        </PersonInfo>
      </div>
    )
  }

}
export default App;