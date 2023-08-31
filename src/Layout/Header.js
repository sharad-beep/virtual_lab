import React from "react";
import { NavLink, Link } from "react-router-dom";




const Header = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{marginBottom:"20px"}}> {/* applied css to navbar class at index.css*/}
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand"> {/*  applies css to navbar-brand*/}
             Learning APP
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <SearchInput /> */}
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">     {/* applied csss to active class refering to navlink in index.css*/ }
                  Home
                </NavLink>
              </li>
            

            
               
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
