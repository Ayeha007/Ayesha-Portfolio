'use client';

import logo from '@/assets/hs-logo.png';
import { FaGithubSquare, FaAngleDoubleDown} from "react-icons/fa";
import {AiFillBehanceSquare, AiFillLinkedin, AiFillTwitterSquare, AiFillMail} from "react-icons/ai";
import { IoClose, IoReorderFourSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { personalData } from '@/data/page-data';
import Image from "next/image";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "SERVICES", link: "#services" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  const { contactLinks } = personalData;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60 text-gray-900" : "text-white"
      }`}>

      <div className="flex items-center justify-between md:px-8">
        <div className="mx-6">
          <h4 className="text-4xl uppercase font-bold">
          <Image
            src={logo}
            alt="logo"
            className="md:w-[120px] md:h-[88px] w-[80px] h-[60px] mt-4"/>
          </h4>
        </div>
        <div className= "text-gray-900 md:block hidden px-8 py-2 font-medium  rounded-bl-full">
          <ul className="flex items-center gap-1 py-2 text-lg text-black">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-2 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-900"
          } text-3xl md:hidden m-6 pr-2`}>
          <IoReorderFourSharp/>
        </div>
        <div
          className={`md:hidden text-black absolute w-2/3 h-screen
      px-4 py-2 font-medium bg-white/90 shadow-xl shadow-cyan-600/30 top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-6 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600">
                <Link href={menu?.link}>{menu?.name}</Link>
              </li>
            ))}
    <div className="flex p-1 gap-2 ml-2 flex-shrink-0 flex-grow-0">
    
    <Link href={contactLinks?.[1]} aria-label={"behance link"}>
      <AiFillBehanceSquare className="w-10 h-10 fill-cyan-600 hover:fill-black" />
    </Link>
   
    <Link href={contactLinks?.[2]} aria-label={"twitter link"}>
      <AiFillTwitterSquare className="w-10 h-10 fill-cyan-600 hover:fill-black" />
    </Link>
    <Link href={contactLinks?.[3]} aria-label={"linkedin link"}>
      <AiFillLinkedin className="w-10 h-10 fill-cyan-600 hover:fill-black" />
    </Link>
    <Link href={contactLinks?.[4]} aria-label={"git link"}>
      <FaGithubSquare className="w-[38px] h-[36px] fill-cyan-600 hover:fill-black" />
    </Link>
  </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;