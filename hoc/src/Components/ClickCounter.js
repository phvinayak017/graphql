import React,{Component} from 'react'
import withCounter from '../HOC/withCounter'

class ClickCounter extends Component{
    render(){
        const {count, handleClick, name} = this.props
        return(
            <div>
                <button 
                    onClick = {handleClick}>
                    {name} Clicked {count} times
                </button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5)