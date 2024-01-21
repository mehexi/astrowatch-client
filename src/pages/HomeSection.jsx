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
    b.reveal([1000], [1000]);
  }, []);

  return (
    <section className="w-screen h-screen relative">
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
          <button className="px-[50px] py-[10px] border w-fit mx-auto rounded-full text-base hover:bg-white hover:text-black duration-300 font-semibold capitalize">
            shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
