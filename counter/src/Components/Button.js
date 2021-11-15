import React, { Component } from "react"


export default class Button extends Component{
    render(){
        const {clickHandler, children} = this.props;
        return(
            <div className="btn">
                <button className="btn-1" onClick={clickHandler}>{children}</button>
            </div>
            )
        }
    
    }
