import React from "react";
import './Component.css';

class RightComponent extends React.Component{
    render(){
        return(
            <div className='card' style={{backgroundColor:"aqua"}}>
                <h1>This is created using Class Component</h1>
                <p>This is done using external CSS</p>
                <p>This is done using inline CSS</p>
            </div>
        )
    }
}

export default RightComponent;