import React, { Component } from 'react'
import Children9 from './Children9'

class Parents8 extends Component {

    method(){
        alert("hello parents")
    }
  render() {
    return (
       <Children9 propsMethod={()=>this.method()}/>
    )
  }
}

export default Parents8
