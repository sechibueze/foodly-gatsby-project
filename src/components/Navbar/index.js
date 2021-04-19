import React from "react"
import { Link } from "gatsby"
import * as navbarStyles from "./navbar.module.css"
console.log("navbarStyles", navbarStyles)
const Navbar = () => (
  <nav className={navbarStyles.navbar}>
    <Link to="/" className="logo-wrapper">
      LOGO
    </Link>
    <div className={navbarStyles.navigation}>
      <ul className={navbarStyles.navlinkWrapper}>
        <li className={navbarStyles.navlink}>
          <Link to="/about">About</Link>{" "}
        </li>
        <li className={navbarStyles.navlink}>
          <Link to="/blog"> Blog </Link>{" "}
        </li>
      </ul>
      <div className={navbarStyles.hamburger}>MENU</div>
    </div>
  </nav>
)

export default Navbar
