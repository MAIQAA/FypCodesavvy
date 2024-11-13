import React from "react";
import Marquee from "react-fast-marquee";

const CodeSavvyMarquee = () => {
  return (
    <div className="flex flex-col items-center justify-center self-center py-10 text-[#DDF345] bg-white">
      <Marquee
        className="text-5xl font-semibold h-14"
        autoFill="true"
        direction="right"
        speed={60}
      >
        CodeSavvy
      </Marquee>
      <Marquee
        className="text-5xl h-14"
        autoFill="true"
        direction="left"
        speed={60}
      >
        Code Learning Platform
      </Marquee>
    </div>
  );
};

export default CodeSavvyMarquee;
