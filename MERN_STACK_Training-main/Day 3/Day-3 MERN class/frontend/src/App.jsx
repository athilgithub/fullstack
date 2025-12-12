import React from 'react'
import Home from './Home'
import ClassBasedComp from './ClassBasedComp'
import Nav from './Nav'
import ParentComponent from './ParentComponent'
import Register from './Register'
const App = () => {
  return (
    <div>
      <Nav/>
      <Register/>
      {/* <ParentComponent/> */}
      {/* <ClassBasedComp/> */}
    </div>
  )
}

export default App
