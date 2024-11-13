import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] text-dark px-16">
      {/* Button Section */}
      <div
        id="btng"
        className="container-fluid flex flex-wrap justify-center p-4"
      >
        <button className="text-center bg-[#DDF345] text-white mt-4 mx-2 flex-1 bg-dark py-2 px-4 rounded-md font-sans">
          Spaces
        </button>
        <button className="text-center bg-[#DDF345] text-white mt-4 mx-2 flex-1 bg-dark py-2 px-4 rounded-md font-sans">
          Upgrade
        </button>
        <button className="text-center bg-[#DDF345] text-white mt-4 mx-2 flex-1 bg-dark py-2 px-4 rounded-md font-sans">
          Newsletter
        </button>
        <button className="text-center bg-[#DDF345] text-white mt-4 mx-2 flex-1 bg-dark py-2 px-4 rounded-md font-sans">
          Get Certified
        </button>
        <button className="text-center bg-[#DDF345] text-white mt-4 mx-2 flex-1 bg-dark py-2 px-4 rounded-md font-sans">
          Report Error
        </button>
      </div>

      {/* Content Sections */}
      <div className="container-fluid mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Top Tutorials Section */}
          <div>
            <h4 className="text-center font-sans text-xl font-semibold">
              Top Tutorials
            </h4>
            <ul className="list-unstyled text-center">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "PHP",
                "JAVA",
                "C++",
                "JQuery",
              ].map((tutorial) => (
                <li key={tutorial} className="text-sm text-gray-700">
                  {tutorial} tutorials
                </li>
              ))}
            </ul>
          </div>

          {/* Top References Section */}
          <div>
            <h4 className="text-center font-sans text-xl font-semibold">
              Top References
            </h4>
            <ul className="list-unstyled text-center">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "PHP",
                "JAVA",
                "C++",
                "JQuery",
              ].map((reference) => (
                <li key={reference} className="text-sm text-gray-700">
                  {reference} References
                </li>
              ))}
            </ul>
          </div>

          {/* Top Examples Section */}
          <div>
            <h4 className="text-center font-sans text-xl font-semibold">
              Top Examples
            </h4>
            <ul className="list-unstyled text-center">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "PHP",
                "JAVA",
                "C++",
                "JQuery",
              ].map((example) => (
                <li key={example} className="text-sm text-gray-700">
                  {example} Examples
                </li>
              ))}
            </ul>
          </div>

          {/* Get Certified Section */}
          <div>
            <h4 className="text-center font-sans text-xl font-semibold">
              Get Certified
            </h4>
            <ul className="list-unstyled text-center">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "PHP",
                "JAVA",
                "C++",
                "JQuery",
              ].map((certificate) => (
                <li key={certificate} className="text-sm text-gray-700">
                  {certificate} Certificate
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="container-fluid text-center p-10">
        <div className="container">
          <p className="text-xs text-gray-600">
            CodeSavvy is optimized for learning and training. Examples might be
            simplified to improve reading and learning. Tutorials, references,
            and examples are constantly reviewed to avoid errors, but we cannot
            warrant full correctness of all content. While using CodeSavvy, you
            agree to have read and accepted our terms of use, cookie and privacy
            policy.
          </p>
          <p className="text-xs text-gray-600">
            Copyright 2024 - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
