import React, {Component}from "react";

import Display from "./Display";

export default class TestDiv extends Component {
    render(){
        return(
            <div>
                
               <h3> hi yo Hi YO </h3>
               <h1> <Display value={10}></Display> </h1>

            </div>
        )
    }
}
