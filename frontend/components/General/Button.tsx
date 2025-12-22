import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

function Button({ children, className,...props }: ButtonProps) {
  return (
    <button
      className={`flex mt-5 px-4  cursor-pointer rounded-full transition-all duration-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
       