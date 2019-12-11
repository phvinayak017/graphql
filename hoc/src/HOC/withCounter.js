import React,{Component} from 'react'

const withCounter = (WrappedComponent, number) =>{
    return class withCounter extends Component{
        state ={
            count:0
        }
        handleClick = () => {
            console.log("clicked")
            this.setState({
                count:this.state.count+number
            })
        }
        render(){
            const {count} = this.state
            return (
                <WrappedComponent 
                   {...this.props}
                    count={count} 
                    handleClick = {this.handleClick}
                    />
            )
        }
    }
}

export default withCounter