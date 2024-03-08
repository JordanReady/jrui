import React from "react";

const DemoVideo = (url: string) => {
  return (
    <div className="container flex flex-col m-auto center mt-[80px]">
      <video width="90%" controls>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default DemoVideo;
