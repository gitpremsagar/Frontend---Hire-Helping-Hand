import React from "react";

const UserThumbnail = ({ src, alt }) => {
  return (
    <div className="w-12 h-12 rounded-full overflow-hidden">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default UserThumbnail;
