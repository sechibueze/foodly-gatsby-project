import React from "react"
import Navbar from "../Navbar"
import Footer from "../Footer"
import "./layout.css"
const Layout = ({ children }) => {
  return (
    <main className="layout-wrapper">
      <div className="content-container">
        <Navbar />
        <div className="body-container"> {children} </div>
      </div>
      <div className="layout-footer-wrapper">
        <Footer />
      </div>
    </main>
  )
}

export default Layout
