import baffle from "baffle";
import React, { useEffect } from "react";
import "../animationcss/animation.css";

const HomeSection = () => {
  useEffect(() => {
    const element = document.querySelector("#headline");
    const b = baffle(element, {
      characters: "abcdefghijklmnopqrstuvwxyz",
      speed: 300
    });
    b.start();
    b.reveal([500], [500]);
  }, []);

  return (
    <section className="h-screen relative">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="/src/assets/pexels-maciej-panfazi-6867665 (1080p).mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute text-white right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 text-center  flex flex-col gap-6">
        <div className="flex flex-col gap-6 animate-Bottom">
          <div className="flex flex-col gap-3">
            <h1 className="font-Questrial text-base  uppercase tracking-[3.6px]">
              Watches that make every second sweeter.
            </h1>
            <div
              id="headline"
              className="font-galine text-5xl tracking-[5.6px] uppercase"
            >
              ASTROWATCH
            </div>
          </div>
          <label className=" border w-fit mx-auto rounded-full relative group overflow-hidden">
            <button className="px-[50px] py-[10px] font-semibold capitalize group-hover:text-black duration-500">
              shop now
            </button>
            <div className="h-20 absolute top-0 w-full bg-white translate-y-28 group-hover:translate-y-0 duration-500 -z-20 ">hellp</div>
          </label>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
