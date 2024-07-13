/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";
import icon from "../images/icon.svg";
const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Shopping Cart",
    description:
      "Crafted a user-friendly and responsive e-commerce website. By undertaking this project, I aim to solidify my understanding of PHP development while honing my skills in database management and web design.",
    url: "https://github.com/Abhishek5165/Abhisheks_Shopping_Cart",
  },
  {
    title: "Abhishek's Gallery",
    description:
      "Crafted an intuitive image gallery application prioritizing efficient search and sorting functionalities. Seamlessly integrated a swift download feature for quick access and saving of images.",
    url: "https://github.com/Abhishek5165/Abhisheks_gallery",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to Vercel. Includes my experience and design abilities.",
    url: "https://github.com/Abhishek5165/My-Resume",
  },
  {
    title: "Killer_Net (NetFlix Clone)",
    description:
      "This is a Netflix clone developed as part of a personal project. The project was built using HTML, Tailwind CSS & JavaScript.",
    url: "https://github.com/Abhishek5165/Killer_Net",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>🧣 Portfolio</h2>
      <div className="projects">
        <div style={{ maxWidth: "40%", alignSelf: "center" }} className="Abhi">
          <img
            className="img"
            src={image}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 className="project_title" style={{ flexBasis: "40px" }}>
                  🎀&nbsp; {project.title}
                </h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <h2 style={{ textAlign: "center" }}>🎯 Coding Profiles</h2>
      <div className="coding">
        <div className="one">
          <img src={icon} alt="" />
          <h3>Leetcode</h3>
          <p><a href="https://leetcode.com/u/Abhishek_5165/" target="_blank">A_B_H_I_131</a></p>
          <p>Problems Solved (580+)</p>
        </div>
        <div className="two">
        <img src={icon} alt="" />
          <h3>CodeShef</h3>
          <p><a href="https://www.codechef.com/users/abhishek_105" target="_blank">decoder_13</a></p>
          <p>2 ⭐, Highest Rating (1520)</p>
        </div>
        <div className="three">
        <img src={icon} alt="" />
          <h3>CodeStudio</h3>
          <p><a href="https://www.naukri.com/code360/profile/Abhishek_1320" target="_blank">Abhishek_13</a></p>
          <p>270+ Problems Solved</p>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Portfolio;
