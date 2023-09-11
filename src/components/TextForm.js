import React, { useState } from "react";
//useState --> Hook

export default function TextForm(props) {
  // text = "new text";   //wrong way to change the state
  // setText("new Text");    //Correct way : by use of function

  const handleUppercaseClick = () => {
    //set already present text to uppercase text
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Change in Uppercase!", "success");
  };

  const handleLowercaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Change in Lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("HandleOnChange");
    setText(event.target.value);
  };

  //useState --> Hook
  const [text, setText] = useState("Enter text here ");

  return (
    <>
      {/* First curly braces{} for write javascript and second {} is for make a object */}

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "#042743",
              }}
            ></textarea>
          </div>

          {/* Button 1 */}
          <button
            // className={`btn btn-${props.btnColor} mx-3`}
            className={`btn btn-primary mx-3`}
            onClick={handleUppercaseClick}
          >
            Convert to Uppercase
          </button>

          {/* Button 2 */}
          <button
            // className={`btn btn-${props.btnColor} mx-3`}
            className={`btn btn-primary mx-3`}
            onClick={handleLowercaseClick}
          >
            Convert to Lowercase
          </button>

          {/* Button 3 */}
          <button
            // className={`btn btn-${props.btnColor} mx-3`}
            className={`btn btn-primary mx-3`}
            onClick={handleClearClick}
          >
            Clear All
          </button>
        </div>
      </div>

      {/* WORD COUNTER AND PREVIEW BOX */}

      {/* my-3 gives margin in y direction 3 ki, it is bootstrap class */}

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <p>
          {(text.split(" ").length > 1 ? text.split(" ").length : 0)}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read this text</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview"}</p>
      </div>
    </>
  );
}
