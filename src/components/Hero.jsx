import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex-row flex justify-between items-center  mb-10 pt-3 ">
        <img src={logo} alt="logo" srcset="" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://digitalgeeks.pl", "_blank")}
          className="black_btn">
          DigitalGeeks
        </button>
      </nav>
      <h1 className="head_text">
        Summarize content with <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">DigitalGeeks</span>{" "}
      </h1>

      <h2 className="desc">
        This is An AI Free AI tool by DigitalGeeks you can use this tool to
        reduce your time of reading unnecessary things{" "}
      </h2>
    </header>
  );
};

export default Hero;
