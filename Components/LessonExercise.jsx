import Image from "next/image";
import React from "react";
import { FaBook, FaPen } from "react-icons/fa";

export default function LessonExercise() {
  const modules = [
    {
      id: 1,
      image: "/Pair programming-cuate.png",
      title: "Learning Module",
      description:
        "Access in-depth explanations and real-world examples to help you understand coding concepts.",
    },
    {
      id: 2,
      image: "/Programming-amico.png",
      title: "Exercises Module",
      description:
        "Put your knowledge to the test with interactive questions and hands-on coding exercises.",
    },
  ];

  return (
    <div className="relative flex flex-col items-center px-16 my-20 space-y-10 md:flex-row md:space-x-8 md:space-y-0">
      {modules.map((items) => {
        return (
          <div className="relative group w-1/2" key={items.id}>

            {/* Content Section */}
            <div className="relative flex flex-col gap-4 items-center text-center bg-white border-t border-l border-gray-300 shadow-lg rounded-3xl p-10">
              <div className="text-[#DDF345]">
              <Image
                className="rounded-lg"
                src={"/Programming-amico.png"}
                width={0}
                height={0}
                alt="LE"
                sizes="2000px"
                style={{ height: "300px", width: "auto" }}
              />
              </div>
              <h2 className="text-3xl font-semibold tracking-wide">
                {items.title}
              </h2>
              <p className="text-gray-600 text-lg">{items.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
