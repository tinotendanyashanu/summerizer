import React from "react";
import { facebook, github, site, instagram } from "../assets";
const Footer = () => {
  return (
    <div className="w-full flex justify-between  mt-10 ">
      <h3 className="items-center ">©2023 Tinotenda Nyashanu</h3>
      <div className=" flex justify-between  " style={{ gap: "10px" }}>
        <a href="https://www.facebook.com/DigitalGeeksz" target="_blank">
          <img
            src={facebook}
            alt=""
            srcset=""
            className="gap-5 w-10 object-contain"
          />
        </a>

        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram} alt="" srcset="" className="w-10" />
        </a>

        <a href="https://www.digitalgeeks.pl/" target="_blank">
          <img src={github} alt="" srcset="" className="w-10 " />
        </a>

        <a href="https://www.digitalgeeks.pl/" target="_blank">
          <img src={site} alt="" srcset="" className=" w-10 " />
        </a>
      </div>
    </div>
  );
};

export default Footer;
