import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { NavLink, Link } from "react-router-dom";

import "../styles/navbar.css";
import Logo from "./Logo";

function Navbar() {
  return (
    <header className="navbar">
      <Logo />

      <nav aria-label="Primary Navigation">
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/product">Product</NavLink>
          </li>

          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <Link
        to="/login"
        className="primary-btn"
        aria-label="Get started with FlowPilot AI"
      >
        Get Started
      </Link>

      <button
        className="mobile-menu"
        type="button"
        aria-label="Open navigation menu"
      >
        <HiOutlineMenuAlt3 aria-hidden="true" />
      </button>
    </header>
  );
}

export default Navbar;