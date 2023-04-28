import Image from "next/image";
import React from "react";

export default function ImageBox({ imageName }) {
  const isImageAvailable = false;
  return (
    <div>
      {isImageAvailable ? (
        <Image
          src="/dummy-proposal-thumbnail/dummy-proposal-thumbnail.png"
          alt="image"
          width={300}
          height={300}
        />
      ) : (
        <div className="w-full h-full text-white text-lg rounded-xl bg-blue-400  hover:bg-blue-600 flex flex-col justify-center items-center min-h-[150px] sm:min-h-[200px]  lg:min-h-[300px] cursor-pointer">
          <span className="block">Upload Image </span>
          <span className="block">(Aspect Ratio 1:1)</span>
        </div>
      )}
    </div>
  );
}
