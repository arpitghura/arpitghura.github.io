import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder20: "rounded-[20px]",
  RoundedBorder10: "rounded-[10px]",
};
const variants = {
  FillCyan400: "bg-cyan_400",
  FillBluegray900: "bg-blue_gray_900 text-cyan_400",
  FillGray900: "bg-gray_900",
  FillBluegray90001: "bg-blue_gray_900_01 text-green_A200",
};
const sizes = { sm: "p-1.5", md: "p-[9px]", lg: "p-3.5", xl: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder20", "RoundedBorder10"]),
  variant: PropTypes.oneOf([
    "FillCyan400",
    "FillBluegray900",
    "FillGray900",
    "FillBluegray90001",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
