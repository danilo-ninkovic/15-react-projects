import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent; //text u buttonu
    const tempBtn = e.target.getBoundingClientRect(); //DOMRect object
    const center = (tempBtn.left + tempBtn.right) / 2; //centar buttona
    const bottom = tempBtn.bottom - 3; //dno buttona - 3px

    openSubmenu(page, { center, bottom }); // 2 arg - page i {}
  };
  const handleSubmenu = (e) => {
    /* ako je e.target (ispod misa) prostor koji nema u sebi 'link-btn' onda 
    treba zatvoriti submenu */
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />{" "}
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn" onMouseOver={displaySubmenu}>
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
