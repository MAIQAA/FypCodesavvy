"use client";
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

const files = {
  "index.html": {
    name: "index.html",
    language: "html",
    value: "",
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: "",
  },
  "script.js": {
    name: "script.js",
    language: "javascript",
    value: "",
  },
};

export default function Home() {
  const [fileName, setFileName] = useState("index.html");
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  const [selectedLanguage, setSelectedLanguage] = useState("html");

  function handleEditorChange(value) {
    const file = files[fileName];
    file.value = value;
  }

  const file = files[fileName];

  // Handle the dynamic change of language for editor
  useEffect(() => {
    const runBtn = document.getElementById("runCode");
    const clsBtn = document.getElementById("closeWindow");

    runBtn?.addEventListener("click", () => {
      setHtmlCode(files["index.html"].value);
      setCssCode(files["style.css"].value);
      setJsCode(files["script.js"].value);
    });

    clsBtn?.addEventListener("click", () => {
      document.getElementById("outputWindow").style.display = "none";
    });
  }, []);

  return (
    <div className="relative px-16 flex h-screen justify-between">
      <div className="relative w-[45vw] h-[65vh] grid self-center gap-0">
        {/* Language selection dropdown */}
        <div className="flex bg-gray-800 flex-row-reverse justify-between p-2 h-fit">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            id="runCode"
          >
            Run
          </button>
          <select
            value={selectedLanguage}
            onChange={(e) => {
              setSelectedLanguage(e.target.value);
              files[fileName].language = e.target.value;
            }}
            className="bg-white px-5 py-2 rounded-md"
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>

        <Editor
          className=""
          height="full"
          theme="vs-dark"
          saveViewState={true}
          path={file.name}
          defaultLanguage={selectedLanguage} // Dynamically set language
          defaultValue={file.value}
          onChange={handleEditorChange}
          value={file.value}
        />
      </div>

      {/* Output Window */}
      <div className="relative bg-gray-200 w-[45vw] grid self-center gap-0">
        <div className="bg-gray-800 p-2 flex justify-between text-white">
          <h1 className="font-bold items-center">Output</h1>
        </div>
        <iframe
          title="output"
          srcDoc={`<html><body>${htmlCode}</body><style>${cssCode}</style><script>${jsCode}</script></html>`}
          className="w-full shadow-lg h-[60vh]"
        />
      </div>
    </div>
  );
}
