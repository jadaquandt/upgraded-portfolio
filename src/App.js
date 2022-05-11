import './App.css';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <p>New Portfolio</p>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
