// App.jsx

// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { applyTheme, setTheme } from "./Theme";


// PAGES
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


// COMPONENTS
import Nav from "./Components/Nav";


function App() {
  // State for showing/hiding the nav. Hide nav when the Error page is active.
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    applyTheme();
  }); 
  
  const handleThemeChange = (theme) => {
    setTheme(theme);
    applyTheme();
  }
 
  return (
    <main className="h-screen w-full bg-fixed bg-gradient-to-b from-[#dfe9f3] via-white to-[#dfe9f3] dark:bg-gradient-to-b dark:from-dark dark:via-primary dark:to-dark">
      <Router>
        {showNav && <Nav handleThemeChange={handleThemeChange} />}
        <Routes>
          <Route path="/" element={<Home setShowNav={setShowNav} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/projects"
            element={<Index setShowNav={setShowNav} />}
          />
          <Route path="/projects/:id" element={<Show />} />
          <Route
            path="*"
            element={
              <FourOFour setShowNav={setShowNav} />
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
