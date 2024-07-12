
import Welcome from './components/Welcome/index'
import './App.css'
import { Dashboard } from './components/Dashboard/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  function Trash() {
    return (
      <div className="trash">
        <h2>Trash</h2>
        <p>Here you can manage your deleted notes.</p>
      </div>
    );
  }
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </Router>
  )
}

export default App
