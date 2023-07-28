"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
//Import pics
import mobo from "@/assets/001.png";
import bird from "@/assets/bird.png";
import bvnew from "@/assets/bv-news.png";
import DCF from "@/assets/DCF.png";
import nature from "@/assets/nature.png";
import salon from "@/assets/salont.png";
import up from "@/assets/up.png";
import vrv from "@/assets/vrv.png";
import libya from "@/assets/libya.png";

function Cards() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-xl transition-shadow hover:shadow-lg pb-10">
          <Image
            src={nature}
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white bg-black/30">
              Nature & I Blockchain
            </h3>
            <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Show Details
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-xl transition-shadow hover:shadow-lg">
          <Image
            src={salon}
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium bg-black/30 text-white bg-black">
              Salon Tasker
            </h3>
            <span className="mt-1.5 bg-black inline-block px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Shop Details
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-xl transition-shadow hover:shadow-lg">
          <Image
            src={vrv}
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium bg-black/30 text-white bg-black">
              VRV Anime Casestudy
            </h3>
            <span className="mt-1.5 bg-black inline-block  px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Show Details
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-xl transition-shadow hover:shadow-lg">
          <Image
            src={mobo}
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium bg-black/30 text-white bg-black">
              Voicelo App
            </h3>
            <span className="mt-1.5 bg-black inline-block  px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Show Details
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-xl transition-shadow hover:shadow-lg">
          <Image
            src={bvnew}
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium bg-black/30 text-white bg-black">
              BlockVentors News App
            </h3>
            <span className="mt-1.5 bg-black inline-block  px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Show Details
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-xl transition-shadow hover:shadow-lg">
          <Image
            src={DCF}
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium bg-black/30 text-white bg-black">
              DCF Charity Website
            </h3>
            <span className="mt-1.5 bg-black inline-block  px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Show Details
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-xl transition-shadow hover:shadow-lg">
          <Image
            src={bird}
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium bg-black/30 text-white bg-black">
              Birdino
            </h3>
            <span className="mt-1.5 bg-black inline-block  px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Show Details
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-xl transition-shadow hover:shadow-lg">
          <Image
            src={libya}
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium bg-black/30 text-white bg-black">
              Libya Center
            </h3>
            <span className="mt-1.5 bg-black inline-block  px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Show Details
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-xl transition-shadow hover:shadow-lg">
          <Image
            src={up}
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium bg-black/30 text-white bg-black">
              Upfiverr Billing Page
            </h3>
            <span className="mt-1.5 bg-black inline-block  px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Show Details
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Cards;
