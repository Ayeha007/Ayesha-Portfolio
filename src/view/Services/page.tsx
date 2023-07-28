import React from "react";
import Image from "next/image";
import Cards from "./cards";
import guide from "@/assets/guide.png";

function Services() {
  return (
    <section id="services" className="md:pt-16 pt-8 text-cyan-600 ">
      <div className="md:flex-col p-8 md:mb-20 mb-16 text-center">
        <h3 className="md:text-7xl text-5xl font-bold text-cyan-100">
          SERVICES
        </h3>
        <p className="text-slate-900 font-semibold md:-my-14 -my-10  text-2xl md:text-4xl">
          What I Offer
        </p>
      </div>

      {/* Service Cards */}
      <div className="md:flex justify-center">
        <div className="pl-8 md:pl-0">
          <Image src={guide} alt="img" width={480} height={240} />
        </div>
        <div className="md:w-[440px] md:h-[380px]">
          <Cards />
        </div>
      </div>
    </section>
  );
}

export default Services;
