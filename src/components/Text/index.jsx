import React from "react";

const variantClasses = {
  h1: "font-bold text-6xl md:text-7xl lg:text-8xl", // Adjusted font sizes for larger screens
  h2: "font-semibold text-5xl md:text-6xl lg:text-7xl", // Adjusted font sizes for larger screens
  h3: "font-bold text-4xl md:text-5xl lg:text-6xl", // Adjusted font sizes for larger screens
  h4: "font-semibold text-3xl md:text-4xl lg:text-5xl", // Adjusted font sizes for larger screens
  h5: "font-semibold text-2xl md:text-3xl lg:text-4xl", // Adjusted font sizes for larger screens
  h6: "font-semibold text-xl md:text-2xl lg:text-3xl", // Adjusted font sizes for larger screens
  body1: "font-normal text-lg md:text-xl lg:text-2xl", // Adjusted font sizes for larger screens
  body2: "font-normal text-base md:text-lg lg:text-xl", // Adjusted font sizes for larger screens
  body3: "font-normal text-base", // No need for responsive font sizes here
  body4: "font-normal text-sm", // No need for responsive font sizes here
};


const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
