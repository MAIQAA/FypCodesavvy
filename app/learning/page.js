'use client'
import React, { useState } from "react";
import Angular from './AngularJS.json';
import Appml from './APPML.json';
import Asp from './ASP.json';
import Bootstrap from './Bootstrap.json';
import Cp from './C++.json';
import Canvas from './Canvas.json';
import Css from './CSS.json';
import DataScience from './DataScience.json';
import Git from './Git.json';
import Go from './Go.json';
import Html from './HTML.json';
import Java from './Java.json';
import Javascript from './Javascript.json';
import Json from './JSON.json';
import Jquery from './jQuery.json';
import Kotlin from './Kotlin.json';
import Matlab from './MatlabPilot.json';
import Mongo from './MongoDB.json';
import Mysql from './MySQL.json';
import Nodejs from './NodeJS.json';
import Numpy from './NumPy.json';
import Php from './PHP.json';
import PostgreSQL from './PostgreSQL.json';
import Python from './Python.json';
import R from './R.json';
import Rasberry from './RasberryPi.json';
import ReactJSON from './React.json';
import Rwd from './RWD.json';
import Sass from './Sass.json';
import Scipy from './SciPy.json';
import Sidjango from './SiDjango.json';
import TailwindCSS from './TailwindCSS.json';
import Typescript from './Typescript.json';
import Vue from './Vue.json';
import XML from './XML.json';

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
  Git,
  Go,
  Java,
  Javascript,
  Json,
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

  const handleFileSelection = (fileName) => {
    setSelectedFile(fileName);
    setSelectedTopic(Array.isArray(files[fileName]) ? files[fileName][0] : {});
  };

  const handleSidebarSelection = (title) => {
    const topic = Array.isArray(files[selectedFile])
      ? files[selectedFile].find((item) => item.title === title)
      : null;
    setSelectedTopic(topic || {});
  };

  return (
    <div className="relative flex flex-col min-h-screen mt-20">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white p-4 flex justify-start space-x-2 overflow-x-auto LearnTopbar">
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
              files[selectedFile].map((topic) => (
                <li
                  key={topic.title}
                  className="cursor-pointer hover:bg-gray-600 p-2 rounded"
                  onClick={() => handleSidebarSelection(topic.title)}
                >
                  {topic.title}
                </li>
              ))
            ) : (
              <li className="text-gray-400">No topics available</li>
            )}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 overflow-auto">
          <h2 className="text-3xl font-bold mb-4">{selectedTopic.title || "No Title"}</h2>
          <p className="text-lg mb-4">{selectedTopic.content || "No Content Available"}</p>
          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
            <code>{selectedTopic.code_example || "// No code example available"}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Page;
