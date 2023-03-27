import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";

//my-3 is class in javascript that gives y margin = 3
let name = "harry";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(0 81 126)";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils - Home";
      }, 3000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
      setInterval(() => {
        document.title = "TextUtils - Home";
      }, 3000);
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        <switch>
        <Routes>
        <Route exact path="/" element={<Textforms/>} />
        <Route exact path="/about" element={<About/>} />
      </Routes>

        </switch> 
        </div>
      </Router>
    </>
  );
}

export default App;
