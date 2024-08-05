import React from 'react'
// import Navbar from './Components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import UserDashboard from './Screens/UserDashboard'
import ProjectScreen from './Screens/ProjectScreen'
import FeatureScreen from './Screens/FeatureScreen'
import TodoScreen from './Screens/TodoScreen'
const App = () => {
  return (
  <Router>
  {/* <Navbar/> */}
  <Routes>
    <Route path='/' element={<HomeScreen/>}/>
    <Route path='/userdashboard' element={<UserDashboard/>}/>
    <Route path="/projects" element={<ProjectScreen/>}/>
    <Route path="/projects/:_id/feature/" element={<FeatureScreen/>}/>
    <Route path="/projects/:_id/feature/:fea_id/todo" element={<TodoScreen/>}/>
  </Routes>
  </Router>
  )
}

export default App
