import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  return (
    <div>
     
      <h1>This is Parent component</h1>
       <ChildComponent email ={"arul@gmail.com"} skills = {["java","c"]} data ={{username:"Ravi",password:"123"}}/>
    </div>
  )
}

export default ParentComponent
