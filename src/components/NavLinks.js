import { NavLink } from "react-router-dom";
import closeMenu from "../images/close.svg";
import openMenu from "../images/open.svg";
import { useState } from "react";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button className="dropdown-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
          Nosotros
        </NavLink>
        <NavLink to="/temario" onClick={() => setIsMenuOpen(false)}>
          Temarios
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contacto
        </NavLink>
      </nav>
    </>
  );
};

export default NavLinks;
