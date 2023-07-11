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
  const [errorPage, setErrorPage] = useState(false);

  useEffect(() => {
    applyTheme();
  }, []);

  const handleThemeChange = (theme) => {
    setTheme(theme);
    applyTheme();
  }
  return (
    <main className="h-full w-full bg-gradient-to-t from-[#dfe9f3] to-white to-100% dark:bg-gradient-to-b dark:from-dark dark:via-primary dark:to-dark">
      <Router>
        {!errorPage && <Nav handleThemeChange={handleThemeChange} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/projects"
            element={<Index setErrorPage={setErrorPage} />}
          />
          <Route path="/projects/:id" element={<Show />} />
          <Route
            path="*"
            element={
              <FourOFour errorPage={errorPage} setErrorPage={setErrorPage} />
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
