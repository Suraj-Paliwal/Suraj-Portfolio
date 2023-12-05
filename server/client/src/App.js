import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import EducationScreen from './screens/EducationScreen';
import SkillsScreen from './screens/SkillsScreen';
import InternshipsScreen from './screens/InternshipsScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import CodingProfilesScreen from './screens/CodingProfilesScreen';
import AchievementsScreen from './screens/AchievementsScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen/>}/>
        <Route exact path="/education" element={<EducationScreen/>}/>
        <Route exact path="/skills" element={<SkillsScreen/>}/>
        <Route exact path="/internships" element={<InternshipsScreen/>}/>
        <Route exact path="/projects" element={<ProjectsScreen/>}/>
        <Route exact path="/codingprofiles" element={<CodingProfilesScreen/>}/>
        <Route exact path="/achievements" element={<AchievementsScreen/>}/>
      </Routes>
    </Router>
    <ToastContainer />
    </>
  )
}

export default App;


