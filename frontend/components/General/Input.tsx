"use client";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

function Input({ className, ...others }: InputProps) {
  return (
    <input
      {...others}
      autoComplete="current-password"
      className={`bg-black/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 pl-8 h-12 w-full md:pl-15 transition-all duration-500 ease-in-out hover:bg-black/50 ${className}`}
    />
  );
}

export default Input;
