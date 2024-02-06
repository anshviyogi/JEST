import React from 'react'
import { useState } from 'react'
import handleOtherMethod from './helper'

function App() {
  const [data, setData] = useState("")

  const handleData = () => {
    setData("hello")
  }

  

  return (
    <div>
      <h1>Functional Component Method Testing</h1>
      <button data-testid='btn1' onClick={handleData}>Update</button>
      <button onClick={handleOtherMethod}>Print</button>
      <h2>{data}</h2>
    </div>
  )
}

export default App
