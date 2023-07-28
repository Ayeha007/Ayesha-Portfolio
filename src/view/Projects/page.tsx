import React from "react";
import Cards from "./cards";
import { Libre_Barcode_39_Extended } from "next/font/google";
import Link from "next/link";
import Carde from "./carde";


function Projects() {
  return (
    <section id="projects">
      <div className="w-screen-xl mx-auto px-6 md:px-8 space-y-8 md:space-y-20">
        <div className="lg:flex-col text-center items-center">
          <h3 className="md:text-7xl text-5xl font-bold text-cyan-100">
            SAMPLES
          </h3>
          <p className="text-slate-900 font-semibold md:-my-14 -my-10  text-2xl md:text-4xl">
            My Work
          </p>
        </div>

        <div>
          <Cards />
        </div>

        <div className="flex justify-center item-center md:pb-8">
        <Link href='/cards'>
            <button className="px-6 md:px-16 py-2 md:py-3 font-medium text-lg md:text-2xl bg-cyan-600 text-white rounded-md">
              Load More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
