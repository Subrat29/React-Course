import React, { useState } from "react";

export default function About(props) {

  // myStyle is object
  //   let myStyle = {
  //     color: "white",
  //     backgroundColor: "black",
  //   };

  //handle dark mode event
  // const [myStyle, setMystyle] = useState({
    //default state
    // color: "white",
    // backgroundColor: "black",
  // });

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
  }

  //handle button event
  // const [btnText, setbtnText] = useState("Dark mode off");

  // const darkMode = () => {
  //   if (myStyle.color === "white") {
  //     setMystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtnText("Dark mode off");
  //   } else {
  //     if (myStyle.color === "black") {
  //       setMystyle({
  //         color: "white",
  //         backgroundColor: "black",
  //         border: "1px solid white",
  //       });
  //       setbtnText("Dark mode on");
  //     }
  //   }
  // };

  return (
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    {/* <div className="container" style={myStyle}> */}
      <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">

            {/* Button - 1 */}
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyze your Text
            </button>

          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              rem dolorum dignissimos dolores provident illo, reiciendis quaerat
              deleniti eius ipsa.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">

            {/* Button - 2 */}
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Free to use
            </button>

          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate adipisci quo pariatur consequuntur dignissimos omnis ad
              nobis facilis id excepturi.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">

            {/* Button - 3 */}
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Browser Compatible
            </button>

          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              nesciunt excepturi animi itaque officia vel saepe inventore
              explicabo veritatis fuga!
            </div>
          </div>
        </div>
      </div>

      {/* Dark Mode Button */} 
 
          {/* <div className="container my-3">
              <button type="button" className="btn btn-primary" onClick={darkMode}>
                {btnText}
              </button>
          </div> */}
    </div>
  );
}
