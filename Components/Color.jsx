import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
const Color = () => {
  const router = useRouter(); // Initialize the router

  const handleColorPicker = () => {
    router.push("/colorpicker");
  };
  return (
    <div className="relative flex #f4f4f4;" id="color">
      <div className="grid gap-7 py-20 flex-1 self-center justify-center items-center border-r-4 border-white">
        <h1 className="text-5xl text-[#E95A9E]">Color Picker</h1>
        <p className="text-lg">CodeSavvy`s color picker project</p>
        <Image
          src={"/color.png"}
          width={0}
          height={0}
          alt="Color"
          sizes="1000"
          style={{ height: "200px", width: "auto" }}
        />
        <button
          onClick={handleColorPicker}
          className="w-full px-6 py-2 rounded-full border-t-2 border-b-2 border-[#E95A9E] text-[#E95A9E] font-seri text-lg hover:bg-[#E95A9e] hover:text-white"
        >
          Color Picker
        </button>
      </div>

      <div className="grid gap-7 py-20 flex-1 self-center justify-center items-center border-l-4 border-white">
        <h1 className="text-5xl text-[#3EB8BC]">Code Game</h1>
        <p className="text-lg">Help the Lynx collect pine cones</p>
        <Image
          src={"/game.png"}
          width={0}
          height={0}
          alt="Color"
          sizes="1000"
          style={{ height: "200px", width: "auto" }}
        />
        <button className="w-full px-6 py-2 rounded-full border-t-2 border-b-2 border-[#3EB8BC] text-[#3EB8BC] font-serif text-lg hover:bg-[#3EB8BC] hover:text-white">
          Play Game
        </button>
      </div>
    </div>
  );
};

export default Color;
