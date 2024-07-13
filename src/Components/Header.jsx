/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div id="navbar"
      style={{
        position: "fixed",
        display: "flex",
        paddingBottom:"2px",
        paddingTop:"18px",
        color:"#ffffff",
        justifyContent: "center",
        gap: "2rem",
        background: "#E2DFD0",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a className="nav" href="#home">Home</a>
      <a className="nav" href="#about">About</a>
      <a className="nav" href="#portfolio">Portfolio</a>
      <a className="nav" href="#footer">Contact</a>
      <a className="nav" href="#footer">Profiles</a>
      <div className="Port">
      <a href="https://secret-lemon-xi.vercel.app/" target="_blank">🥷🏼</a>
      </div>
    </div>
  );
};

export default Header;
