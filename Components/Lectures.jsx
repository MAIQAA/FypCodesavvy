import Image from "next/image";
import React from "react";
import { BsSoundwave } from "react-icons/bs";
import { IoLogoGitlab } from "react-icons/io5";

const Lectures = () => {
  return (
    <div className="relative flex justify-between items-center p-16 py-20 bg-white">
      <div className="flex flex-col justify-between w-[40%] gap-10">
        <h1 className="text-5xl">Get up and running fast together</h1>
        <div className="flex justify-between gap-10">
          <div className="space-y-4">
            <BsSoundwave className="text-[#9CA930] size-7" />
            <h1 className="text-3xl">University</h1>
            <p className="text-lg">
              Browse hundreds of in-depth courses, and guides to get up and
              running fast
            </p>
          </div>
          <div className="space-y-4">
            <IoLogoGitlab className="text-[#9CA930] size-7" />
            <h1 className="text-3xl">Showcase</h1>
            <p className="text-lg">
              Get inspired by the incredible websites built by members of the
              community
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-[40%]">
        <Image
          className="shadow-2xl"
          src={"/Frame 40.png"}
          width={350}
          height={450}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Lectures;
