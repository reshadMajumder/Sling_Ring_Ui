import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Screens/HomePage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PlanetDetails from './Screens/PlanetDetails';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Community from './Screens/Community';
import StreamingPlatforms from './Screens/Streaming';
import Lab from './Screens/Lab';
import Vr from './Screens/Vr';
import ExploreExoplanets from './Screens/Explore';
import spaceBackground from "./assets/images/bg.gif";


function App() {
  return (
    <Router>
      
      <Navbar />
      <div style={{ backgroundImage: `url(${spaceBackground})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/planet/:id" element={<PlanetDetails />} /> 
        <Route path="/community" element={<Community />} /> 
        <Route path="/streaming" element={<StreamingPlatforms />} /> 
        <Route path="/lab" element={<Lab />} /> 
        <Route path="/vr" element={<Vr />} /> 
        <Route path="/explore" element={<ExploreExoplanets url="https://eyes.nasa.gov/apps/exo/" />} /> 
        


      </Routes>
      </div>

      <Footer/>
    </Router>
  );
}
export default App;
