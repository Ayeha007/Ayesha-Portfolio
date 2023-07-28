import girlimg from "@/assets/girl.png";
import { aboutMe } from "@/data/page-data";
import Image from "next/image";
import Card from "./cards";

export default function About() {
  const { body } = aboutMe;
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];

  return (
    <section id="about" className="md:m-16 m-6">
      <div className="lg:flex flex-row justify-around">
        {/* Text */}

        <div
          className="
          lg:flex-col md:my-20 mt-16 text-center items-center"
        >
          <h3 className="md:text-7xl text-5xl font-bold text-cyan-100">
            ABOUT ME
          </h3>
          <p className="text-slate-900 font-semibold md:-my-14 -my-10  text-2xl md:text-4xl">
            Know Me More
          </p>
          <div className="flex md:flex-row flex-col-reverse items-center px-4 max-w-3xl mx-auto">
            <p className="md:mt-24 mt-20 text-center text-xl text-slate-900 leading-7 mx-auto">
              {body}
            </p>
          </div>

          {/* Cards  */}
          <div className="md:pt-8">
            <Card />
          </div>
        </div>

        {/* pic */}

        <div className="flex p-4 md:p-16 md:m-8 justify-center items-align-center">
          <Image src={girlimg} alt="img" width={480} height={280} />
        </div>
      </div>
    </section>
  );
}
