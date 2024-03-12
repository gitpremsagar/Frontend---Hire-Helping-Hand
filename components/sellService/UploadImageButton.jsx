import React from "react";

export default function UploadImageButton() {
  return (
    <div className="w-full h-full text-white text-lg rounded-xl bg-blue-400  hover:bg-blue-600 flex flex-col justify-center items-center min-h-[150px] sm:min-h-[200px]  lg:min-h-[300px] cursor-pointer">
      <span className="block">Upload Button</span>
      <span className="block">(Aspect Ratio 1:1)</span>
    </div>
  );
}
