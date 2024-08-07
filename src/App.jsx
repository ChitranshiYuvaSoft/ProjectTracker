import React from "react";
// External Package Import
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Screen Import
import HomeScreen from "./Screens/HomeScreen";
import UserDashboard from "./Screens/UserDashboard";
import ProjectScreen from "./Screens/ProjectScreen";
import FeatureScreen from "./Screens/FeatureScreen";
import TodoScreen from "./Screens/TodoScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";

const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/projects" element={<ProjectScreen />} />
          <Route path="/projects/:_id/feature/" element={<FeatureScreen />} />
          <Route
            path="/projects/:_id/feature/:fea_id/todo"
            element={<TodoScreen />}
          />
        </Routes>
      <ToastContainer />
      </Router>
    </>
  );
};

export default App;
