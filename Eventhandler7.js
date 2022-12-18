import React, { Component } from 'react'

class Eventhandler7 extends Component {

    method1(){
        alert("you clicked button")
    }
  render() {
    return (
      <div>
        <button onClick={()=>this.method1()}>Click me</button>
        
      </div>
    )
  }
}

export default Eventhandler7
