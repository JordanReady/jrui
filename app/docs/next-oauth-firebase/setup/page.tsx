import React from "react";

const page = () => {
  return (
    <div className="container flex flex-col m-auto center mt-[80px]">
      <video width="90%" controls>
        <source src="/Next_OAuth_Firebase.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default page;
