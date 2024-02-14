// App.jsx

// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { applyTheme, setTheme } from "./Theme";


// PAGES
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";

// COMPONENTS
// import Nav from "./Components/Nav";


function App() {

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
        {/* {showErrorPage && <Nav handleThemeChange={handleThemeChange} />} */}
        <Routes>
          <Route path="/" element={<Home  handleThemeChange={handleThemeChange} />} />
          <Route path={"*"} element={<FourOFour />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
