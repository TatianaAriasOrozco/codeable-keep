
import Welcome from './components/Welcome/index'
import './App.css'
import { Dashboard } from './components/Dashboard/index'
import { useState, useEffect } from 'react'

function App() {

  const [username, setUsername] = useState("");
  const usernamelocal = sessionStorage.getItem("username");

  useEffect(() => {
    if (usernamelocal !== null) {
      setUsername(usernamelocal);
      return
    }
  }, [])

  return (
    <>
      {
        username === '' ? <Welcome setUsername={setUsername} /> : <Dashboard username={username} setUsername={setUsername} />
      }
    </>
  )
}

export default App
