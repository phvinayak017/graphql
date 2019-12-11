import React,{Component} from 'react'
import withCounter from '../HOC/withCounter'

class HoverCounter extends Component{
    render(){
        const {count, handleClick, name} = this.props
        return(
            <div>
                <h4 onMouseOver = {handleClick}>
                    {name} Hovered {count} times
                </h4>               
            </div>
        )
    }
}

export default withCounter(HoverCounter,10)