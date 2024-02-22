import React from "react";
import { Slide } from "react-awesome-reveal";

function MyProject(props) {
  return (
    <Slide direction="up">
      <div className="shadow-xl space-y-3 w-fit mx-auto max-w-[22rem] p-4 mt-4 hover:scale-105 transition">
        <div>
          <img className="h-44" src={props.image} />
        </div>
        <div className="text-xl space-y-1">
          <h1 className="font-bold">{props.name}</h1>
          <p>{props.detail}</p>
          <p className="font-bold">Technologies used</p>
          <p>{props.tech}</p>
        </div>
      </div>
    </Slide>
  );
}

export default MyProject;
