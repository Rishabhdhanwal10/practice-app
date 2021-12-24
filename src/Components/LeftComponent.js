import React from 'react';
import './Component.css';

function LeftComponent(){
    return(
        <div className='card' style={{backgroundColor:"lightblue"}}>
            <h1>This is created using Functional Component</h1>
            <p>This is done using external CSS</p>
            <p>This is done using inline CSS</p>
        </div>
    )
}

export default LeftComponent;
