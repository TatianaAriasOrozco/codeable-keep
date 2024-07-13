
import Welcome from './components/Welcome/index'
import './App.css'
import { Dashboard } from './components/Dashboard/index'
import { useState } from 'react'

function App() {

  const [username, setUsername] = useState("");
  
  return (
   <>
     {
      username === '' ? <Welcome setUsername={setUsername}/> : <Dashboard username={username} setUsername={setUsername}/>
     }
   </>
  )
}

export default App
