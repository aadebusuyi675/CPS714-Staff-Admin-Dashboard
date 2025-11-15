import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ViewHome from './Pages/ViewHome'
import ViewMembers from './Pages/ViewMembers'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewHome/>}/>
        <Route path="/members" element={<ViewMembers/>}/>
      </Routes>
    </Router>
  )
}

export default App
