import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(cls) {
  //whether dark mode is on or off
  const [mode, setmode] = useState("light");

  //alert state
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Toggle Mode

  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-danger");
  // };

  // DarkMode
  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add("bg-" + cls);

    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled!", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode disabled!", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* THis is Router use to visit different pages of website without reload */}

      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />

        <div className="container my-3" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="TextUtils - Word Counter, Character Counter, Remove extra spaces"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
