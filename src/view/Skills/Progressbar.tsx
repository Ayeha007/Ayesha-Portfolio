import React from "react";

function ProgressBar() {
  return (
    <div className="w-full flex flex-col lg:flex-row md:gap-10  md:px-20 px-8">
      {/* Bars 1*/}
      <div className="w-full lg:w-1/2">
        <div className="mb-10">
          <p className="pb-2 pl-1 text-lg text-white">UI/UX Design</p>
          <div className="bg-white relative h-[10px] w-full rounded-2xl">
            <div className="bg-cyan-600 absolute top-0 left-0 h-full w-[94%] rounded-2xl">
              <span className="bg-cyan-600 absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
               <span className="bg-cyan-600 absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                94%
              </span>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <p className="pb-2 pl-1 text-lg text-white">Graphic Design</p>
          <div className="bg-white relative h-[10px] w-full rounded-2xl">
            <div className="bg-cyan-600 absolute top-0 left-0 h-full w-[88%] rounded-2xl">
              <span className="bg-cyan-600 absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                <span className="bg-cyan-600 absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                88%
              </span>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <p className="pb-2 pl-1 text-lg text-white">JavaScript</p>
          <div className="bg-white relative h-[10px] w-full rounded-2xl">
            <div className="bg-cyan-600 absolute top-0 left-0 h-full w-[75%] rounded-2xl">
              <span className="bg-cyan-600 absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                <span className="bg-cyan-600 absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                75%
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Bars 2*/}
      <div className="w-full lg:w-1/2">
        <div className="mb-10">
          <p className="pb-2 pl-1 text-lg text-white">TypeScript</p>
          <div className="bg-white relative h-[10px] w-full rounded-2xl">
            <div className="bg-cyan-600 absolute top-0 left-0 h-full w-[70%] rounded-2xl">
              <span className="bg-cyan-600 absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                <span className="bg-cyan-600 absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                70%
              </span>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <p className="pb-2 pl-1 text-lg text-white">Next.Js</p>
          <div className="bg-white relative h-[10px] w-full rounded-2xl">
            <div className="bg-cyan-600 absolute top-0 left-0 h-full w-[65%] rounded-2xl">
              <span className="bg-cyan-600 absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                <span className="bg-cyan-600 absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                65%
              </span>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <p className="pb-2 pl-1 text-lg text-white">Research</p>
          <div className="bg-white relative h-[10px] w-full rounded-2xl">
            <div className="bg-cyan-600 absolute top-0 left-0 h-full w-[85%] rounded-2xl">
              <span className="bg-cyan-600 absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                <span className="bg-cyan-600 absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                85%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
