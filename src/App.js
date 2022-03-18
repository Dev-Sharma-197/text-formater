// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import NabBar from "./Components/NavBar"
import Alert from "./Components/Alerts"
import TextFormater from "./Components/TextFormater"
import About from "./Components/About"
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom"

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "black"
      showAlert("Dark Mode is Enabled", "success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <Router>
      <NabBar title='TextFormatter' link_1='Home' link_2='About' mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Alert alert={alert} />
        <Switch>
          <Route exact path='/' element={<TextFormater showAlert={showAlert} heading="Enter the Text to Format" mode={mode} />} />
          <Route exact path='/about' element={<About color={mode} />} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
