
import Welcome from './components/Welcome/index'
import './App.css'
import { Dashboard } from './components/Dashboard/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
  )
}

export default App
