/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import About from "./Compnent/About";
import Navbar from "./Compnent/Navbar";
import TextForm from "./Compnent/TextForm";
import Alert from "./Compnent/Alert";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (messege, type) => {
    setAlert({
      messege: messege,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(": Dark mode has beem enable", "success");
      //document.body.style.color ='white'
      document.title = " textUtils - Dark mode";
      // setInterval (()=>{
      //  document.title = 'textUtils is Amazing mode';
      // }, 2000);
      // setInterval (()=>{
      //  document.title = 'install textUtils Now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(": Light mode has beem enable", "success");
      // document.body.style.color ='#000000'
      document.title = " textUtils - light mode";
    }
  };
  console.log("Testing Github");
  return (
    <>
      <Router>
        <Navbar title="textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route excet path="/about">
              <About />
            </Route>
            <Route excet path="/">
              <TextForm
                showAlert={showAlert}
                heading="enter text to analyze below"
                mode={mode}
                name="a2"
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
