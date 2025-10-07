import { useState, useEffect } from "react";
import './App.css';

import Hero from './components/Hero';
import ThemeSwitcher from './components/ThemeSwicher';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const colorThemes = {
  blue: {
    main_bg: "#1e293b",
    second_bg: "#e2e8f0",
    text_color: "#f8fafc",
    btn_color: "#3b82f6"
  },
  orange: {
    main_bg: "#1f2937",
    second_bg: "#dadada",
    text_color: "#f8fafc",
    btn_color: "#f97316"
  },
  purple: {
    main_bg: "#2e1a47",
    second_bg: "#ede6f7",
    text_color: "#ffffff",
    btn_color: "#8b5cf6"
  },
  green: {
    main_bg: "#1f3f2e",
    second_bg: "#d7f3e3",
    text_color: "#f0fdf4",
    btn_color: "#22c55e"
  }
};

function App() {
  const [theme, setTheme] = useState("blue");

  // Apply theme globally with CSS variables
  useEffect(() => {
    const selectedTheme = colorThemes[theme];
    Object.keys(selectedTheme).forEach(key => {
      document.documentElement.style.setProperty(`--${key}`, selectedTheme[key]);
    });
  }, [theme]);

  return (
    <>
      <Hero theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Experience theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
      
    </>
  );
}

export default App;
