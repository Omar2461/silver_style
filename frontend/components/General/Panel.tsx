"use client";

import { HTMLAttributes, ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

function Panel({ children, className, ...rest }: PanelProps) {
  return (
    <div
      {...rest}
      className={`bg-black/40 rounded-4xl relative hover:scale-105 transtion duration-400 ease-in-out ${className}`}
    >
      {children}
    </div>
  );
}

export default Panel;
