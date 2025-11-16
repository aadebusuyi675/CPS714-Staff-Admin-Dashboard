import './App.css'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ViewHome from './Pages/ViewHome'
import ViewMembers from './Pages/viewMembers'
import Test from './Pages/Test'
import EditMember from './Pages/EditMember'


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewHome/>}/>
        <Route path="/members" element={<ViewMembers/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/:id" element={<EditMember/>}/>
      </Routes>
    </Router>
  )
}

export default App
