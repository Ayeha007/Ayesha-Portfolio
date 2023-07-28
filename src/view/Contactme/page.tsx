"use client";
import {
  FaGithubSquare,
  FaLinkedin,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import {
  BsFillTelephoneInboundFill,
  BsWhatsapp,
  BsFillBuildingsFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { createElement, useRef } from "react";
import { personalData } from "@/data/page-data";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { contactLinks } = personalData;
  const form = useRef<HTMLFormElement>(null);

  // Sending Email
  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    emailjs
      .sendForm(
        "service_md4q2vd",
        "User Respose",
        form.current,
        "idfVEZpHHgy8mn4AD"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current?.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section
      className="bg-cover bg-[url(/cont.png)] w-full md:h-[640px]"
      id="contact"
    >
      <Toaster />

      <div className="lg:flex flex-row justify-evenly space-y-10">
        <div className="pt-16 lg:flex-col mt-20 text-center items-center">
          <h3 className="md:text-4xl text-2xl font-semibold text-white mb-10">
            Get in Touch
          </h3>

          {/* icons */}
          <div className="flex-col px-20 md:px-4 text-white space-y-4 ">
            <div className="flex space-x-3 items-start">
              <div>
                <BsFillBuildingsFill className="w-6 h-6" />
              </div>
              <p className="text-white md:font-medium md:text-xl text-lg text-left">
                Lane 5 Range Road Rawalpindi Pakistan
              </p>
            </div>
            <div className="flex space-x-3 items-center">
              <BsFillTelephoneInboundFill className="w-6 h-6" />
              <p className="text-white md:font-medium md:text-xl text-lg">
                +92-303-00000
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <BsWhatsapp className="w-6 h-6" />
              <p className="text-white md:font-medium md:text-xl text-lg">
                +92-303-00000
              </p>
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <p className="text-white font-medium text-2xl">Follow Me</p>
            <div className="flex flex-row justify-center gap-2 text-white">
              <a href={contactLinks?.[1]} aria-label={"behance link"}>
                <FaBehanceSquare className="w-10 h-10 hover:fill-cyan-600" />
              </a>
              <a href={contactLinks?.[2]} aria-label={"twitter link"}>
                <FaTwitterSquare className="w-10 h-10 hover:fill-cyan-600" />
              </a>
              <a href={contactLinks?.[3]} aria-label={"linkedin link"}>
                <FaLinkedin className="w-10 h-10 hover:fill-cyan-600" />
              </a>
              <a href={contactLinks?.[4]} aria-label={"git link"}>
                <FaGithubSquare className="w-10 h-10 hover:fill-cyan-600" />
              </a>
            </div>
          </div>
        </div>
        {/* Contact form */}
        <div className="flex justify-center pb-16">
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-col mt-8 space-y-6 md:mt-24"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-2 rounded w-80 md:w-[480px]"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-2 rounded w-80 md:w-[480px]"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-2 rounded w-80 h-44 md:w-[480px]"
              required
            ></textarea>
            <div>
              <button className="px-6 md:px-8 py-2 font-medium text-xl border-2 text-white rounded-md hover:bg-cyan-600">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
