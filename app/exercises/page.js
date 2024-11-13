'use client'
import React, { useState, useEffect } from "react";
import Angular from './Angular.json';
import Appml from './Appml.json';
import Asp from './Asp.json';
import Bootstrap from './Bootstrap.json';
import Cp from './Cpp.json';
import Canvas from './Canvas.json';
import Css from './Css.json';
import DataScience from './Datascience.json';
import Django from './Django.json';
import Git from './Git.json';
import Go from './Go.json';
import Html from './Html.json';
import Java from './Java.json';
import Javascript from './Jaavscript.json';
import Jquery from './JQuery.json';
import Kotlin from './Kotlin.json';
import Matlab from './MatlabPilot.json';
import Mongo from './Mongodb.json';
import Mysql from './Mysql.json';
import Nodejs from './Node.json';
import Numpy from './Numpy.json';
import Php from './Php.json';
import PostgreSQL from './Postgresql.json';
import Python from './Python.json';
import R from './R.json';
import Rasberry from './Rasberry.json';
import ReactJSON from './React.json';
import Rwd from './Rwd.json';
import Sass from './Sass.json';
import Scipy from './Scipy.json';
import Sidjango from './SiDjango.json';
import TailwindCSS from './Tailwindcss.json';
import Typescript from './Typescript.json';
import Vue from './Vue.json';
import XML from './Xml.json';

const files = {
  Angular,
  Appml,
  Asp,
  Bootstrap,
  Css,
  Html,
  Rasberry,
  Cpp: Cp,
  Canvas,
  DataScience,
  Django,
  Git,
  Go,
  Java,
  Javascript,
  Jquery,
  Kotlin,
  Matlab,
  Mongo,
  Mysql,
  Nodejs,
  Numpy,
  Php,
  PostgreSQL,
  Python,
  R,
  React: ReactJSON,
  Rwd,
  Sass,
  Scipy,
  Sidjango,
  TailwindCSS,
  Typescript,
  Vue,
  XML,
};

const Page = () => {
  const [selectedFile, setSelectedFile] = useState('Angular'); // Default to Angular file
  const [selectedTopic, setSelectedTopic] = useState(
    Array.isArray(files[selectedFile]) ? files[selectedFile][0] : {} // Default to first topic or empty object
  );
  const [visibleAnswer, setVisibleAnswer] = useState(null); // Track the currently visible answer

  const handleFileSelection = (fileName) => {
    setSelectedFile(fileName);
    setSelectedTopic(Array.isArray(files[fileName]) ? files[fileName][0] : {});
    setVisibleAnswer(null); // Reset visible answer when switching files
  };

  const handleSidebarSelection = (question, index) => {
    const topic = Array.isArray(files[selectedFile]) 
      ? files[selectedFile][index] 
      : null;
    setSelectedTopic(topic || {});
    setVisibleAnswer(null); // Reset the answer visibility when changing the question
  };

  const toggleAnswerVisibility = (index) => {
    setVisibleAnswer(visibleAnswer === index ? null : index); // Toggle visibility of the answer
  };

  return (
    <div className="relative flex flex-col min-h-screen mt-20">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white p-3 flex justify-start space-x-2 overflow-x-auto LearnTopbar">
        {Object.keys(files).slice(0, 50).map((fileName) => (
          <button
            key={fileName}
            onClick={() => handleFileSelection(fileName)}
            className={`px-4 py-1 rounded  ${
              fileName === selectedFile ? "bg-blue-500" : "bg-gray-500"
            }`}
          >
            {fileName}
          </button>
        ))}
      </div>

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-gray-800 text-white p-4 overflow-y-scroll h-screen LearnSidebar">
          <h2 className="text-xl font-bold mb-4">{selectedFile} Topics</h2>
          <ul className="space-y-2">
            {Array.isArray(files[selectedFile]) && files[selectedFile].length > 0 ? (
              files[selectedFile].map((topic, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:bg-gray-600 p-2 rounded"
                  onClick={() => handleSidebarSelection(topic, index)}
                >
                  <span className="text-lg">Question {index + 1}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-400">No topics available</li>
            )}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 overflow-auto">
          <h2 className="text-3xl font-bold mb-4">
            {selectedTopic.question || "No Question Selected"}
          </h2>
          <p className="text-lg mb-4">
            {selectedTopic.solution ? (
              <>
                {visibleAnswer === null ? (
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => toggleAnswerVisibility(selectedTopic.question)}
                  >
                    Show Answer
                  </button>
                ) : (
                  <>
                    <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                      <code>{selectedTopic.solution || "// No code example available"}</code>
                    </pre>
                    <button
                      className="text-blue-500 hover:underline mt-2"
                      onClick={() => toggleAnswerVisibility(null)}
                    >
                      Hide Answer
                    </button>
                  </>
                )}
              </>
            ) : (
              "No Solution Available"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
