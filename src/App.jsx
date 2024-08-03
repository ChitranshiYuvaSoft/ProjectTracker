import React from 'react'
// import Navbar from './Components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import UserDashboard from './Screens/UserDashboard'
import ProjectScreen from './Screens/ProjectScreen'
const App = () => {
  return (
  <Router>
  {/* <Navbar/> */}
  <Routes>
    <Route path='/' element={<HomeScreen/>}/>
    <Route path='/userdashboard' element={<UserDashboard/>}/>
    <Route path="/projects" element={<ProjectScreen/>}/>
  </Routes>
  </Router>
  )
}

export default App
