import React, { Component } from 'react'

class Count5 extends Component {

    constructor(props){
        super(props)
        this.state={count:0}
    }

    IncrementToOne(){
        this.setState(
            {
            count:this.state.count+1},
            ()=>{alert(this.state.count)
            }
            )
            
    }
    




  render() {
    return (
      <div>
        <div>count-{this.state.count}</div>
        <button onClick={()=> this.IncrementToOne()}>Increment-1</button>
        
      </div>
    )
  }
}

export default Count5
