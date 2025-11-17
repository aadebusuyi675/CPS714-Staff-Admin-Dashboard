import './App.css'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ViewHome from './Pages/ViewHome'
import ViewMembers from './Pages/viewMembers'
import Test from './Pages/Test'
import EditMember from './Pages/EditMember'
import ViewStaff from './Pages/ViewStaff'
import EditStaff from './Pages/EditStaff'


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewHome/>}/>
        <Route path="/members" element={<ViewMembers/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/editmembers/:id" element={<EditMember/>}/>
        <Route path="/editstaff/:id" element={<EditStaff/>}/>
        <Route path="/staff" element={<ViewStaff/>}/>
      </Routes>
    </Router>
  )
}

export default App
