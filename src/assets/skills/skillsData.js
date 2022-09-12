import js from "./javascript.svg";
import css from "./css3.svg";
import git from "./git-icon.svg";
import html from "./html5.svg";
import linux from "./linux-tux.svg";
import node from "./nodejs.svg";
import npm from "./npm.svg";
import react from "./react.svg";
import vsCode from "./vs-code.svg";
import webpack from "./webpack.svg";
import c from './c++.svg'
import python from './python.svg'
import django from './django.svg'
import mongo from './mongodb.svg'
import mysql from './mysql.svg'
import tailwind from './tailwind.svg'


const skills = {
  Languages: [
    { name: "JavaScript", img: js },
    { name: "Python", img: python },
    { name: "C++", img: c },
    { name: "HTML", img: html },
    { name: "CSS", img: css },

  ],
  Technologies: [
    { name: "ReactJS", img: react },
    { name: "nodeJS", img: node },
    { name: "Django", img: django },
    { name: "Mysql", img: mysql },
    { name: "Mongodb", img: mongo },

  ],
  "Other Tools": [
    { name: "Linux CLI", img: linux },
    { name: "Git", img: git },
    { name: "VS Code", img: vsCode },
    { name: "Tailwind CSS", img: tailwind },
    { name: "npm", img: npm },
    { name: "webpack", img: webpack },
  ],
};

export default skills;
