import './App.css'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ViewHome from './Pages/ViewHome'
import ViewMembers from './Pages/viewMembers'
import ViewClass from './Pages/ViewClass'
import Test from './Pages/Test'
import EditMember from './Pages/EditMember'
import ViewStaff from './Pages/ViewStaff'
import EditStaff from './Pages/EditStaff'
import EditClass from './Pages/EditClass'


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
        <Route path="/class" element={<ViewClass/>}/>
        <Route path="/editclass/:id" element={<EditClass/>}/>
      </Routes>
    </Router>
  )
}

export default App
