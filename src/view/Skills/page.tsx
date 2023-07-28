import React from "react";
import bg from "@/assets/bg-sk.png";
import ProgressBar from "./Progressbar";

export default function Skills() {
  return (
    <section
      id="skills"
      className="md:py-10 py-4 items-align-center relative bg-cover bg-[url(/blue.jpg)]"
    >
      <div className="flex justify-center items-align-center p-8 mt-20 text-white text-center ">
        <p className="text-white font-semibold md:-my-14 -my-10 text-2xl md:text-4xl">
          {" "}
          MY SKILLS{" "}
        </p>
      </div>

      {/* Skills */}
      <div className="flex justify-center items-center p-4 m-4">
        <ProgressBar />
      </div>
    </section>
  );
}
