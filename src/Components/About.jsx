/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";
import myImage from '../images/image.png';

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "👋 Hello I'm Abhishek ! A passionate web developer from India. I am currently pursuing my B.Tech from Indian Institute of Information Technology Bhagalpur, Bihar. I love to work in groups where everyone can voice their opinions and ideas. I like to play chess and cricket. I’m currently learning Django. I’m looking to collaborate on different projects on Web Development.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */

const skillsList = [
  "HTML, CSS, JavaScript",
  "SQL, Git-Bash, Git, Github",
  "Web Design",
  "React-JS, Node-Js",
  "Time Management",
  "PHP, Python, Express-Js",
  "Mongo-DB, My-Sql",
  "Vercel, Git-Hub Pages",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="content">
        <header id="header">
            <div class="top-header">
                <div class="outer">
                    <div class="inner"><img className="im" src={myImage} alt="Abhishek"/></div>
                </div>
                <div class="heading">
                    <h1>About MySelf</h1>
                </div>
            </div>
        </header>

        <p className="large">{description}</p>
        <hr />
        <h2 className="skills">Skills</h2>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
            fontFamily:"Cormorant Garamond",
            fontWeight:700,
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0",fontFamily:"Cormorant Garamond",fontWeight:600,}}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
