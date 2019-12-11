import React,{Component} from 'react'

export class About extends Component{
    
    handleClick = () => {        
        return (
            this.props.history.replace("/contact")
        )
    }

    render(){
        console.log(this.props.history.location)
        return(
            <div>
                <h2>
                    Work
                </h2>
                <button onClick = {this.handleClick}> click about</button>
            </div>
        )
    }
}
