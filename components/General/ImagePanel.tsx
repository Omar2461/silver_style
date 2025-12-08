import React from "react";

interface ImagePanelProps {
  children?: React.ReactNode;
  className?: string;
}

function ImagePanel({className,children}: ImagePanelProps) {
  return (
    <div className={`flex flex-col justify-center rounded-xl ml-10 w-40 h-60 ${className}`}>
      {children}
    </div>
  );
}

export default ImagePanel;
