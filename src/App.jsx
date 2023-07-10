// App.jsx

// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { applyTheme, setTheme } from "/Theme";

// PAGES
import FourOFour from "./Pages/FourOFour";

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
          <Route path="/" />
          <Route
            path="*"
            element={
              <FourOFour errorPage={errorPage} setErrorPage={setErrorPage} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
