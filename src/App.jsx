// App.jsx

// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { applyTheme, setTheme } from "./Theme";


// PAGES
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";

// COMPONENTS
import Nav from "./Components/Nav";


function App() {
  // State for showing/hiding the nav. Hide nav when the Error page is active.
  const [showNav, setShowNav] = useState(true);


  // Apply the user's theme at the load of the page
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Check the mediaQuery and apply the theme
    const handleChange = () => {
      setTheme(mediaQuery.matches ? "dark" : "light");
      applyTheme();
    };

    // Initial setup
    handleChange();

    // Listen for changes in system color scheme preference
    mediaQuery.addEventListener("change", handleChange);


    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };  
  },[]);

  // Toggle between light and dark modes and set the theme
  const handleThemeChange = (theme) => {
    setTheme(theme);
    applyTheme();
  }
 
  return (
    <main className="h-full w-full">
      <Router>
        {showNav && <Nav handleThemeChange={handleThemeChange} />}
        <Routes>
          <Route path="/" element={<Home setShowNav={setShowNav} />} />
          <Route path={"*"} element={<FourOFour setShowNav={setShowNav} />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
