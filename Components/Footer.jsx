import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#F4F4F4] text-dark px-5">
      {/* Button Section */}
      <div
        id="btng"
        className="container-fluid flex flex-wrap justify-center p-4"
      >
        <button className="text-center bg-gray-900 hover:bg-black text-white mt-4 mx-2 flex-1 bg-dark py-2 px-4 rounded-md font-sans">
          Spaces
        </button>
        <button className="text-center bg-gray-900 hover:bg-black text-white mt-4 mx-2 flex-1 bg-dark py-2 px-4 rounded-md font-sans">
          Workspace
        </button>
        <button className="text-center bg-gray-900 hover:bg-black text-white mt-4 mx-2 flex-1 bg-dark py-2 px-4 rounded-md font-sans">
          Get Certified
        </button>
        <button className="text-center bg-gray-900 hover:bg-black text-white mt-4 mx-2 flex-1 bg-dark py-2 px-4 rounded-md font-sans">
          Report Error
        </button>
      </div>

      {/* Footer Text */}
      <div className="container-fluid text-center px-10 py-5">
        <div className="container">
          <p className="text-xs text-gray-600">
            CodeSavvy is optimized for learning and training. Examples might be
            simplified to improve reading and learning. Tutorials, references,
            and examples are constantly reviewed to avoid errors, but we cannot
            warrant full correctness of all content. While using CodeSavvy, you
            agree to have read and accepted our terms of use, cookie and privacy
            policy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
