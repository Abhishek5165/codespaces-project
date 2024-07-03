/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        color:"#ffffff",
        justifyContent: "center",
        gap: "2rem",
        background: "#E2DFD0",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a className="nav" href="#home">Home</a>
      <a className="nav" href="#about">About</a>
      <a className="nav" href="#portfolio">Portfolio</a>
      <a className="nav" href="#footer">Contact</a>
    </div>
  );
};

export default Header;
