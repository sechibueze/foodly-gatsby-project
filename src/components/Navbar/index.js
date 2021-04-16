import { Link } from "gatsby"
import React from "react"
import "./navbar.module.css"
const Navbar = () => (
  <nav className="navbar">
    <div className="logo-wrapper">LOGO</div>
    <ul className="navlink-wrapper">
      <li>
        {" "}
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/">Browse</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/"> Plans </Link>{" "}
      </li>
    </ul>
    <div className="menu-icon">MENU</div>
  </nav>
)

export default Navbar
