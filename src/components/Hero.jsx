import React from "react";
import { Link } from "react-router-dom";
import MyImg from "./MyImg";
import image from "../assets/myImg.png";

function Hero() {
  return (
    <>
      <div className="min-h-[37rem] text-[#172554]  flex justify-center items-center">
        <div className="flex-wrap justify-center md:justify-around space-y-10 py-4 flex items-center md:flex">
          <div className="md:space-y-4 text-center md:text-left space-y-5 basis-1/2">
            <p className="text-2xl font-bold ">Hello I'm</p>
            <p className="text-4xl font-bold text-orange-600">Nitin yadav</p>
            <p className="text-2xl font-bold text-[#172554]">
              Web Developer from India
            </p>
            <p>
              Entry-level Frontend web developer. Proven ability to create
              components for an enterprise level web application. Passionate
              about technology and building scalable web solution.
            </p>
            <button className="bg-orange-400 p-2 px-4 rounded-full text-blue-950 font-bold hover:bg-orange-300">
              <Link to="/about"> About me</Link>
            </button>
          </div>
          <MyImg image={image} />
        </div>
      </div>
    </>
  );
}

export default Hero;
