import React, { useState } from 'react'

function App() {
  const [data, setData] = useState("")

  return (
    <div>
      <p>Hey Ansh</p>
      <button onClick={()=> setData("Data Updated")}>Update Data</button>
      <h1>{data}</h1>
    </div>
  )
}

export default App
