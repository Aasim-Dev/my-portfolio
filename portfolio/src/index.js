import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import html from "./assets/skills/html.png";
import css from "./assets/skills/css.png";
import react from "./assets/skills/react.png";
import node from "./assets/skills/node.png";
import graph from "./assets/skills/graphql.png";
import mongo from "./assets/skills/mongodb.png";
import figma from "./assets/skills/figma.png";

import google from "./assets/history/google.png";
//import microsoft from "./assets/history/microsoft.png";
//import netflix from "./assets/history/netflix.png";

import project from "./assets/project.png";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



export const skills = [
  {
    title: "HTML",
    imageSrc: html,
  },
  {
    title: "CSS",
    imageSrc: css,
  },
  {
    title: "React",
    imageSrc: react,
  },
  {
    title: "Node",
    imageSrc: node,
  },
  {
    title: "GraphQL",
    imageSrc: graph,
  },
  {
    title: "MongoDB",
    imageSrc: mongo,
  },
  {
    title: "Figma",
    imageSrc: figma,
  },
];

export const history = [
  {
    role: "Frontend Developer Intern ",
    organisation: "Brainy Beam Infotech Pvt. Ltd.",
    startDate: "June, 2024",
    endDate: "July, 2024",
    experiences: ["Worked on Fresh Fruit Hub Ecommerce Platform", "Reduced load times by 50%"],
    imageSrc: google,
  },
 
];

export const projects = [
  {
    title: "Project A",
    imageSrc: project,
    description:
      "This is a project made to learn the latest languages by building an app.",
    skills: ["React", "Express", "Node"],
    demo: "https://www.example.com",
    source: "https://www.github.com",
  },
  {
    title: "Project B",
    imageSrc: project,
    description:
      "This is a project made to learn the latest languages by building an app.",
    skills: ["React", "Express", "Node", "Sass"],
    demo: "https://www.example.com",
    source: "https://www.github.com",
  },
  {
    title: "Project C",
    imageSrc: project,
    description:
      "This is a project made to learn the latest languages by building an app.",
    skills: ["React", "Express", "Node"],
    demo: "https://www.example.com",
    source: "https://www.github.com",
  },
];
