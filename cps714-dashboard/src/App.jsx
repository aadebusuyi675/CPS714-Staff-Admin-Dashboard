import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ViewHome } from './Pages/ViewHome'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewHome/>}/>
      </Routes>
    </Router>
  )
}

export default App
