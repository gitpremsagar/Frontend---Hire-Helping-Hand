import Image from "next/image";
import React from "react";

export default function ImageBox({ imageName }) {
  // FIXME: This is a dummy image, replace it with the actual image
  return (
    <div>
      <Image
        src="/dummy-proposal-thumbnail/dummy-proposal-thumbnail.png"
        alt="image"
        width={300}
        height={300}
      />
    </div>
  );
}
