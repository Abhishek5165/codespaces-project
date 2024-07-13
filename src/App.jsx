import React from "react";
import { HashRouter } from "react-router-dom";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Abhishek",
  title: "A passionate Full-Stack developer from India.",
  email: "abhishek1310verma@gmail.com",
  gitHub: "Abhishek5165",
  instagram: "abhishek_v13",
  linkedIn: "abhishek-verma-600899247",
  twitter: "Abhishek_13107",
};

const primaryColor = "#379777";
const secondaryColor = "#ffffff";

const App = () => {
  return (
    <div id="main">
      <HashRouter>
        <Header />
        <Home name={siteProps.name} title={siteProps.title} />
        <About />
        <Portfolio />
        <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </HashRouter>
    </div>
  );
};

export default App;
