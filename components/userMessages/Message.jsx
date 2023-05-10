import React from "react";
import Image from "next/image";

export default function Message({ messageType, message, from }) {
  return (
    <div
      className={`mb-4 flex items-center gap-2 ${
        messageType === "sent" ? `justify-end` : `justify-start`
      }`}
    >
      <div className="rounded-full overflow-hidden">
        <Image
          src={`/dummy-profile-pictures/male.png`}
          width={50}
          height={50}
        />
      </div>
      <div
        className={`rounded-lg px-5 py-5 max-w-[70%] ${
          messageType === "sent" ? `bg-green-400 text-white` : `bg-gray-200`
        }`}
      >
        <p className="text-sm ">
          <span className="cursor-pointer text-blue-500">{from}</span> :{" "}
          {message}
        </p>
      </div>
    </div>
  );
}
