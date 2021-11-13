import React, { Component } from "react"


export default class Button extends Component{
    render(){
        const {clickHandler, children} = this.props;
        return(
            <div>
                <button onClick={clickHandler}>{children}</button>
            </div>
            )
        }
    
    }
