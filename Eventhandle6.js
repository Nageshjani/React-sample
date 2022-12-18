import React from 'react'

function Eventhandle6() {
    function method1(){
        alert('you clicked button')
    }
  return (
    <div>
      <button onClick={()=>method1()}>Click me</button>
      <button onClick={method1}>Click me 2</button>
    </div>
  )
}

export default Eventhandle6
