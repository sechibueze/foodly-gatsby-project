import React from "react"
import { Link } from "gatsby"
import * as navbarStyles from "./navbar.module.css"
const Navbar = () => (
  <nav className={navbarStyles.navbar}>
    <Link to="/" className="logo-wrapper">
      LOGO
    </Link>
    <div className={navbarStyles.navigation}>
      <ul className={navbarStyles.navlinkWrapper}>
        <li className={navbarStyles.navlink}>
          <Link to="/about" activeClassName={navbarStyles.active}>
            About
          </Link>{" "}
        </li>
        <li className={navbarStyles.navlink}>
          <Link to="/blog" activeClassName={navbarStyles.active}>
            {" "}
            Blog{" "}
          </Link>{" "}
        </li>
      </ul>
      <div className={navbarStyles.hamburger}>MENU</div>
    </div>
  </nav>
)

export default Navbar
