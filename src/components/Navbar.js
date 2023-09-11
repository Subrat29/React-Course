//type rfc
import PropTypes from "prop-types";
import React from "react";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    // use backtics to change it to string basically to write javascript
    // use $ to make it variable
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">

        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}

        <a className="navbar-brand" href="#">
          {props.title}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">

              {/* Use Link inplace of a && to inplace of href */}
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>

            </li>
            <li className="nav-item">

              {/* <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link> */}
              {/* <a className="nav-link" href="/about">
                {props.aboutText}
              </a> */}

            </li>
          </ul>

          {/* <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form> */}

          {/* Darkblue mode switch box */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>

          {/* Red mode switch box */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "red" : "light"
            }`}
          >
            <input
              className="form-check-input mx-3"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode1}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Red Mode
            </label>
          </div>

          {/* Green mode switch box */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "green" : "light"
            }`}
          >
            <input
              className="form-check-input mx-3"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode2}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Green Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  //   title: PropTypes.string,
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

//Default props
Navbar.defaultProps = {
  title: "set title",
  aboutText: "About text here",
};
