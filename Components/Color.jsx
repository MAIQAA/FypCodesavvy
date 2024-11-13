import Image from "next/image";
import React from "react";

const Color = () => {
  return (
    <div className="relative flex #f4f4f4;" id="color">
      <div className="grid gap-7 py-20 flex-1 self-center justify-center items-center border-r-4 border-white">
        <h1 className="text-5xl text-[#DDF345]">Color Picker</h1>
        <p className="text-lg">CodeSavvy`s color picker project</p>
        <Image
          src={"/color.png"}
          width={0}
          height={0}
          alt="Color"
          sizes="1000"
          style={{ height: "200px", width: "auto" }}
        />
        <button className="border w-full px-6 py-2 rounded-full bg-[#DDF345] font-serif">
          Color Picker
        </button>
      </div>

      <div className="grid gap-7 py-20 flex-1 self-center justify-center items-center border-l-4 border-white">
        <h1 className="text-5xl text-[#DDF345]">Code Game</h1>
        <p className="text-lg">Help the Lynx collect pine cones</p>
        <Image
          src={"/game.png"}
          width={0}
          height={0}
          alt="Color"
          sizes="1000"
          style={{ height: "200px", width: "auto" }}
        />
        <button className="border w-full px-6 py-2 rounded-full bg-[#DDF345] font-serif">
          Play Game
        </button>
      </div>
    </div>
  );
};

export default Color;
