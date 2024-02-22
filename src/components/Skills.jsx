import React from "react";
import MySkill from "./MySkill";
import html from "../assets/html.webp";
import css from "../assets/css.webp";
import javascript from "../assets/js.webp";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import python from "../assets/python.webp";
import sql from "../assets/mysql.webp";
import { Slide } from "react-awesome-reveal";

function Skills() {
  return (
    <Slide direction="up">
      <div className="min-h-[37rem] text-center space-y-10 mt-10">
        <p className="text-4xl font-bold text-orange-600">- My Skills -</p>
        <div className="grid gap-y-10 md:grid-cols-4 grid-cols-2 pb-10">
          <MySkill skill={"HTML"} num={"1."} image={html} />
          <MySkill skill={"CSS"} num={"2."} image={css} />
          <MySkill skill={"Javascript"} num={"3."} image={javascript} />
          <MySkill skill={"Tailwind CSS"} num={"4."} image={tailwind} />
          <MySkill skill={"Python"} num={"5."} image={python} />
          <MySkill skill={"SQL"} num={"6."} image={sql} />
          <MySkill skill={"React JS"} num={"7."} image={react} />
        </div>
      </div>
    </Slide>
  );
}

export default Skills;
