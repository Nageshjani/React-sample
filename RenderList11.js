import React from 'react'

function RenderList11() {
    const names=['manan','jack','dhfy']
  return (
    <div>
        {names.map((name)=><h1>{name}</h1>)}
      
    </div>
  )
}

export default RenderList11
