import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full flex justify-between items-center  mb-10 pt-3 ">
        <img src={logo} alt="logo" srcset="" className="w-32 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://digitalgeeks.pl", "_blank")}
          className="black_btn">
          DigitalGeeks
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Content With <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">DigitalGeeks</span>{" "}
      </h1>

      <h2 className="desc">
        This AI-powered tool, developed by DigitalGeeks, is designed to save you
        valuable time by efficiently filtering out irrelevant information,
        allowing you to focus on what truly matters. With this tool, you can
        significantly reduce the time spent on reading unnecessary content and
        streamline your information consumption process.{" "}
      </h2>
    </header>
  );
};

export default Hero;
