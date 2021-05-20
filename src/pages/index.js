import React from "react";
import HomePage from "./homePage";
import Skills from "./skills";
import ThemeLayout from "../layout/ThemeLayout";
import SideBar from "../components/Sidebar/Sidebar";
import Projects from "./projects";
import Contact from "./contact";
import About from "./about";

const OneScrollPage = () => (
  <ThemeLayout>
    <SideBar />
    <HomePage />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </ThemeLayout>
);

export default OneScrollPage;
