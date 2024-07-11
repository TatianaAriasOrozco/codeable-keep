import { useState } from 'react'
import Welcome from './Welcome/index'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome />
    </>
  )
}

export default App
