import React, { Component } from 'react'

class Conditional10 extends Component {
constructor(props) {
  super(props)

  this.state = {
     isLoggedIn:true
  }
}


  render() {
    return (
      this.state.isLoggedIn?
      <div>WElcome Nagesh</div>:
      <div>Welcome Guest</div>
    )
  }
}

export default Conditional10
