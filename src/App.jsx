// App.jsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { applyTheme, setTheme } from "../../Theme";

import "./App.css";

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
    <>
      <div>Welcome to my Portfolio</div>
    </>
  );
}

export default App;
