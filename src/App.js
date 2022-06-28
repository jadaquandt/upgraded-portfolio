import React from "react";
import './App.scss';
import {
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./containers/Home/Home"
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";


function App() {
    return (
        <div className="App">
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="resume" element={<Resume />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;
