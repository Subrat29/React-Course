import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import React, { useState } from "react";

// import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
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

  // Dark(Blue) Mode
  const toggleMode = () => {
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

      //For catch the user focus
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1500);
    }
  };

  // Red Mode
  const toggleMode1 = () => {
    if (mode === "light") {
      setmode("red");
      document.body.style.backgroundColor = "#df4949";
      showAlert("Red mode enabled!", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Red mode disabled!", "success");
    }
  };

  // Green Mode
  const toggleMode2 = () => {
    if (mode === "light") {
      setmode("green");
      document.body.style.backgroundColor = "#29a04a";
      showAlert("Green mode enabled!", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Green mode disabled!", "success");
    }
  };

  return (
    <>
      {/* THis is Router use to visit different pages of website without reload */}
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils"
          aboutText="About us"
          mode={mode}
          toggleMode={toggleMode}
          toggleMode1={toggleMode1}
          toggleMode2={toggleMode2}
        />

        <Alert alert={alert} />

        <div className="container my-3" mode={mode}>
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}></Route> */}

            {/* <Route */}
              {/* exact path="/" */}
              {/* element={ */}
                <TextForm
                  heading="Enter the text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              {/* } */}
            {/* ></Route> */}

          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
