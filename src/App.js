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
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Button from '@mui/material/Button';


function App() {
  const [theme, setTheme] = useDarkMode();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
    return (
      <ThemeProvider  theme={theme === 'light' ? lightTheme : darkTheme}>
        <div className="App">
        <GlobalStyles />
            <NavigationBar />
            <Button onClick={toggleTheme}>Toggle Dark Mode</Button>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="resume" element={<Resume />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </div>
        </ThemeProvider>
    );
}

export default App;
