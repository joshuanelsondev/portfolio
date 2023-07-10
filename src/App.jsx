// App.jsx

// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { applyTheme, setTheme } from "/Theme";

// PAGES

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
    <div>
      <Router>
        {!errorPage && <Nav handleThemeChange={handleThemeChange} />}
        <Routes>
          <Route path="/" element={}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
