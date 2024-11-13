import ColorContrastChecker from "@/Components/ColorContastChecker";
import ColorGradientPicker from "@/Components/ColorGradientPicker";
import React from "react";

const page = () => {
  return (
    <div className="px-16 py-28 grid gap-20">

      <div className="flex justify-between">

      {/* Color Gradient Picker */}
      <div className="w-1/2 justify-center grid items-center">
        <ColorGradientPicker />
      </div>

      {/* Instructional Text */}
      <div className="w-1/2">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">How to Use the Color Gradient Picker</h2>
        <p className="text-lg text-gray-700 mb-4">
          The <strong>Color Gradient Picker</strong> is a tool that allows you to pick and customize gradient colors interactively. Here is how you can get the most out of it:
        </p>
        
        <div className="bg-gray-100 p-4 rounded-md shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Features:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Interactive Gradient Selection:</strong> You can click anywhere on the gradient bar to pick a color.</li>
            <li><strong>Color Customization:</strong> Use the color controls to adjust the start and end points of your gradient.</li>
            <li><strong>Real-Time Preview:</strong> As you adjust the colors, you’ll see the gradient update immediately.</li>
            <li><strong>RGBA Color Code:</strong> The selected color gradient is shown in RGBA format, making it easy to use in your project.</li>
          </ul>
        </div>

        <p className="text-lg text-gray-700 mb-4">
          Follow these simple steps to get started:
        </p>

        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li><strong>Select the Gradient:</strong> Click on the gradient bar to pick a color.</li>
          <li><strong>Adjust the Gradient:</strong> Drag the sliders to adjust the start and end colors of the gradient.</li>
          <li><strong>Copy the RGBA Code:</strong> The color code will update as you select the gradient. You can copy this code and use it in your CSS.</li>
          <li><strong>Experiment with Multiple Gradients:</strong> You can apply and customize different gradient styles for various elements in your design.</li>
        </ol>
      </div>
      </div>

      <div className="flex justify-between">
  <div className="w-1/2 flex flex-col justify-center">
  <h1 className="text-4xl font-bold mb-4">How to use Color Contrast Checker</h1>
    {/* Color Contrast Checker details here */}
    <p className="text-lg mb-4">
      The Color Contrast Checker allows you to ensure that your website’s text is readable by checking the contrast ratio between the foreground (text) color and the background color. It helps you meet WCAG (Web Content Accessibility Guidelines) standards for visual accessibility. The checker evaluates both normal and large text and tells you whether the contrast passes AA and AAA levels.
    </p>
    <ul className="list-disc pl-5">
      <li className="mb-2">
        <strong>Foreground:</strong> Select the color of the text or foreground.
      </li>
      <li className="mb-2">
        <strong>Background:</strong> Select the background color behind the text.
      </li>
      <li className="mb-2">
        <strong>Font Size:</strong> Adjust the font size of the text for testing large text.
      </li>
      <li className="mb-2">
        <strong>Font Weight:</strong> Choose between normal or bold to test contrast for different weights.
      </li>
    </ul>
    <p className="mt-4 text-sm text-gray-500">
      The contrast ratio will be displayed, and you`ll be notified if it passes the AA or AAA standards for readability.
    </p>
  </div>

  <div className="w-1/2 grid justify-center items-center px-5">
    <ColorContrastChecker />
  </div>
</div>

    </div>
  );
};

export default page;
