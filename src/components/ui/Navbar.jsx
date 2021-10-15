import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = ({ routes }) => {
  const handleExit = () => {
    localStorage.removeItem("token");
    location.reload();
  };
  return (
    <nav className="navbar navbar-expand-lg shadow-sm navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          <span title="Inicio">
            <i style={{ fontSize: "20px" }} className="bi bi-house"></i>
          </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="d-flex w-100 justify-content-between">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {routes.map((route) => {
                return (
                  <li className="nav-item" key={route.api}>
                    <NavLink
                      to={`/home/${route.api}`}
                      className="nav-link"
                      activeClassName="active"
                    >
                      {route.title}
                    </NavLink>
                  </li>
                );
              })}
              <li className="nav-item">
                <NavLink
                  // href="http://localhost/distri/Hospital_Web/pdf.php"
                  className="nav-link"
                  to="/home/pdf"
                  activeClassName="active"
                  // target="_blank"
                >
                  PDF
                </NavLink>
              </li>
            </ul>

            <div
              className="text-white d-flex mt-2"
              onClick={handleExit}
              title="Salir"
              role="button"
            >
              <span className="me-2">
                <i
                  style={{ fontSize: "20px" }}
                  className="bi bi-box-arrow-left"
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
