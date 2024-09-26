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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/planet/:id" element={<PlanetDetails />} /> 
        <Route path="/community" element={<Community />} /> 
        <Route path="/streaming" element={<StreamingPlatforms />} /> 
        

        {/* <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
