
import "./Comp.css";
import React, { Component } from 'react';

// class Person extends React.Component {
//     render() {
//         const {name, age} = this.pro
//     }
// }

export default class PersonInfo extends Component{

    render(){
        const {name, age, myFun} = this.props;
        return(
            <div className='personinfo'>
                <h3 > 안녕하세요. 이름은 {name}s 나이는{age}살 입니다.</h3>
                {this.props.children}
                <div>{myFun()}</div>
            </div>
        )
    
    }
};



