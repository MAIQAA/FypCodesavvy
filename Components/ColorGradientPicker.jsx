"use client"
import React, { useState } from "react"; // Import useState hook
import ColorPicker from "react-best-gradient-color-picker";

const ColorGradientPicker = () => {
  const [color, setColor] = useState("rgba(255,255,255,1)"); // Set initial color state

  return (
    <div>
      <ColorPicker value={color} onChange={setColor} />
    </div>
  );
};

export default ColorGradientPicker; // Export the correct component name
