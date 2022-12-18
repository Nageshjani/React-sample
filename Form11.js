import React, { useState } from 'react'

const Form11 = () => {
    const [name,setName]=useState('nhnh')

    function handelSubmit(){
        alert(`Name that you entered is ${name}`)
    }
 
  return (
    <div>
      {name}
      <form onSubmit={()=>handelSubmit()} >
         <input 
            type='text'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            
            />
        <input type="submit" />

      </form>
    </div>
  )
}

export default Form11
