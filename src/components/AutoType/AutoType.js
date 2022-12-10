import React from "react";
import { TypeAnimation } from "react-type-animation";

const AutoType = ({ children }) => {
  const text = children.split(",");
  return (
    <TypeAnimation
      // Same String at the start will only be typed once, initially
      sequence={[text[0], 1000, text[1], 1000, text[2], 1000]}
      speed={50} // Custom Speed from 1-99 - Default Speed: 40
      style={{}}
      wrapper="span" // Animation will be rendered as a <span>
      repeat={Infinity} // Repeat this Animation Sequence infinitely
    />
  );
};

export default AutoType;
