import { personalData } from "@/data/page-data";
import {
  FaGithubSquare,
  FaEnvelope,
  FaLinkedin,
  FaBehanceSquare,
  FaTwitterSquare,
  FaAngleDoubleDown,
} from "react-icons/fa";
import Link from "next/link";
import TypingAnimation from "@/utiles/homeanimation";

export default function Hero(data: any) {
  const { name, contactLinks } = personalData;
  return (
    <section id="home">
      <div
        className="flex justify-center items-center md:h-[626px] h-[580px]
            bg-fixed bg-center bg-[url(/bg-h.png)]"
      >
        {/* Text */}
        <div className="bg-slate-700/30 w-full md:h-[626px] h-[580px]">
          <div className="p-4 z-[2] text-center lg:mt-36 mt-24">
            <p className="text-lg font-medium md:font-semibold md:text-2xl text-white">
              Hey Visitors!{" "}
            </p>
            <h2 className="text-2xl font-semibold md:text-5xl mt-6 tracking-wide text-white">
              {name}
            </h2>
            <div className="flex justify-center items-center mt-2">
              <p className="text-lg font-semibold md:text-2xl tracking-wide text-white">
                I Am{" "}
              </p>
              <div
                className="text-lg font-semibold md:text-2xl tracking-widest text-black ml-2 h-[60px] flex items-center overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <TypingAnimation />
              </div>
            </div>
            <button className="px-6 md:px-16 py-2 mt-8 font-medium text-lg md:text-2xl border-2 text-white rounded-md hover:bg-cyan-600">
              Contact Me
            </button>
            <div className="text-white mt-2">
              <div className="flex justify-center items-center gap-1 md:gap-2 flex-shrink-0 flex-grow-0">
                <Link href={contactLinks?.[0]} aria-label={"email link"}>
                  <FaEnvelope className="w-11 h-[84px] hover:text-cyan-600" />
                </Link>
                <Link href={contactLinks?.[1]} aria-label={"behance link"}>
                  <FaBehanceSquare className="w-10 h-10 hover:text-cyan-600" />
                </Link>
                <Link href={contactLinks?.[2]} aria-label={"twitter link"}>
                  <FaTwitterSquare className="w-10 h-10 hover:text-cyan-600" />
                </Link>
                <Link href={contactLinks?.[3]} aria-label={"linkedin link"}>
                  <FaLinkedin className="w-10 h-10 hover:text-cyan-600" />
                </Link>
                <Link href={contactLinks?.[4]} aria-label={"git link"}>
                  <FaGithubSquare className="w-10 h-10 hover:text-cyan-600" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-align-center">
            <div
              className="animate-bounce mt-8 flex justify-center items-center rounded-full
               bg-white/50 w-12 h-12  "
            >
              <FaAngleDoubleDown className="w-6 h-6 text-cyan-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
