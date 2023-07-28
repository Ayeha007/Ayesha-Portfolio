"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
// import { Pagination } from "swiper";

import {
  IoColorPalette,
  IoDesktop,
  IoPhonePortrait,
  IoSearch,
  IoLogoApple,
} from "react-icons/io5";
import { RiPencilRuler2Fill } from "react-icons/ri";

function App() {
  return (
    <>
      <Swiper>
        {/* Cards */}

        <SwiperSlide>
          <div
            className="block rounded-xl bg-white border border-cyan-600 
          shadow-xl transition-shadow hover:shadow-lg p-4"
          >
            <IoColorPalette className="w-8 h-8 fill-cyan-600" />
            <h2 className="mt-4 text-xl font-bold text-cyan-600">
              Graphic Design
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Brochures, Business cards, Letterhead, Envelopes,Company Brand
              Identity, Posters, Banners, Social Media Graphics & Digital
              Marketing ads.{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="block rounded-xl border bg-white border-cyan-600 shadow-xl transition-shadow hover:shadow-lg p-4">
            <IoDesktop className="w-8 h-8 fill-cyan-600" />
            <h2 className="mt-4 text-xl font-bold text-cyan-600">Web Design</h2>
            <p className="mt-1 text-sm text-gray-600">
              Design & build a custom website, Front-end web development,
              Landing Pages, Website Mockups, Website Wireframes & Website
              Blueprint / User Journey Map.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="block rounded-xl border bg-white border-cyan-600 shadow-xl transition-shadow hover:shadow-lg p-4">
            <IoPhonePortrait className="w-8 h-8 fill-cyan-600" />
            <h2 className="mt-4 text-xl font-bold text-cyan-600">
              Mobile apps
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Conceptualization, User Friendly design, Cross-platform App
              Development, Optimization, Data Structuring, Interactive
              Prototype, Mobile UI/UX Designing, & Trials and Testing.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="block rounded-xl border bg-white border-cyan-600 shadow-xl transition-shadow hover:shadow-lg p-4 ">
            <RiPencilRuler2Fill className="w-8 h-8 fill-cyan-600" />
            <h2 className="mt-4 text-xl font-bold text-cyan-600">
              UI/UX Design
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              High-fidelity Prototype, Wireframes, Mobile and Web User Interface
              Design, Cross-Platform Compatibility & User-Friendly & Technical
              Design.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="block rounded-xl border bg-white border-cyan-600 shadow-xl transition-shadow hover:shadow-lg p-4">
            <IoLogoApple className="w-8 h-8 fill-cyan-600" />
            <h2 className="mt-4 text-xl font-bold text-cyan-600">
              Brand Identity
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Brand Design Agency, LOGO Design, Color Palette, Graphic Elements,
              Typography Website & Mobile app & Social Media Branding.{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="block rounded-xl border bg-white border-cyan-600 shadow-xl transition-shadow hover:shadow-lg p-4">
            <IoSearch className="w-8 h-8 fill-cyan-600" />
            <h2 className="mt-4 text-xl font-bold text-cyan-600">Research</h2>
            <p className="mt-1 text-sm text-gray-600">
              User Reserach, Market Research, User Interviews, User Testings,
              Getting high-quality feedback, & Identify Target Audience.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
