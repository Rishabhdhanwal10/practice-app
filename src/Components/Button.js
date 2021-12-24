import React, {Component} from 'react';
import './Button.css'
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

class Button extends React.Component{

    constructor(){
        super();

        this.state={
            isLeftComponent: false,
            isRightComponent: false
        }
    }

    handleLeftComponent=()=>{
        this.setState(
            {
                isLeftComponent: !this.state.isLeftComponent
            }
        )
        console.log("clicked")
    }

    handleRightComponent=()=>{
        this.setState(
            {
                isRightComponent: !this.state.isRightComponent
            }
        )
        console.log("clicked")
    }

    render(){
      return(

        <>
        <div className='parent'>
            <div className='child' onClick={this.handleLeftComponent} style={{backgroundColor:"lightblue"}}>
                <p>
                    To see styling in Functional component
                </p>
            </div>
            <div className='child' onClick={this.handleRightComponent} style={{backgroundColor:"aqua"}}>
                <p>
                To see styling in Class component
                </p>
            </div>
        </div>

        <div className='addStyle'>
               {
                   this.state.isLeftComponent? <LeftComponent /> : null
               }

               {
                   this.state.isRightComponent? <RightComponent /> : null
               }
           </div>
        </>
        
        )
    }
}

export default Button;