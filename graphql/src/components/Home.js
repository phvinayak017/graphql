import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'

export class Home extends Component{    
    handleClick = () => {        
        return (
            this.props.history.push("/work")
        )
    }

    render(){
        console.log(this.props.history.location)
        return(
            <div>
                <h2>
                    Home
                </h2>
                {/* <button onClick = {this.handleClick}> click me</button> */}
            </div>
        )
    }
}

