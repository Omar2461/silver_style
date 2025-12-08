import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`flex mt-5 lg:w-30 xl:w-32 w-24 xl:p-2 p-1.5 xl:pl-6 xl:text-xl lg:pl-6 lg:text-lg pl-3 cursor-pointer rounded-full transition-all duration-500 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
