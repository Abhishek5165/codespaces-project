/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/OIP.jpeg";
import dp from "../images/dp2.jpg";

const imageAltText = "Abhishek....";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div className="top-back">
        <div>
          <h1 className="top-Head">नमस्ते 🙏🏻 EveryOne ! I'am </h1>
          <h1 className="Name">
            <span>{name}</span> Verma !
          </h1>
          <h2 className="my-bio">{title}</h2>
        </div>

        <div className="div-img">
          <img className="boy" src={dp} alt="Abhishek" />
        </div>
      </div>
      <div className="arrow-img" style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <a href="#about">
          <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
        </a>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
