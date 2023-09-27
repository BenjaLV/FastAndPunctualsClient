import React from "react";

interface Props {
  text: string;
  className: string;
}

const Button = ({ text, className }: Props) => {
  return (
    <button
      type="submit"
      className={`${className} rounded-full text-center w-[270px] h-7`}
    >
      {text}
    </button>
  );
};
export default Button;
