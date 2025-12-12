import React from 'react'

const ChildComponent = (props) => {

  return (
    <div>
        <h1> parent Data : {props.data.username}</h1>
        <h3>{props.email}</h3>
        <h2>{props.skills}</h2>
      <h1>This is child component</h1>
    </div>
  )
}

export default ChildComponent
