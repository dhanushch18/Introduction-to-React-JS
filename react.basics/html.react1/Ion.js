import React from 'react'
import './Ion.css'

const data="ch17"
function Ion() {
  return (
    <div>
        
      <h1 style={{color:"red",backgroundColor : "lightblue"}}>hello world</h1>
      <p>I'm {data}.</p>
      <p className='hello'>Hi,{data}.</p>
      
      <Helloo ></Helloo>
    </div>
  )
}

export default Ion


function Helloo() {
    return <h1 className='hello'>Hi,how are you {data}.</h1>
}
