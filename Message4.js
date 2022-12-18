import React,{Component} from 'react'

class message extends Component{



    //constructer -> state

    constructor(){
        super()
        this.state={
            message:"Hello in class"
        }
    }

    //method -> to chnage state

    chnageState(){
        this.setState({
            message:"state has been changed"
        })
    }


    //render function

    render(){
        return (
            <div>
            <h1>Hello {this.state.message}</h1>
            <button onClick={()=>this.chnageState()} >Subscribe</button>
            </div>
        )
    }

}

export default message

