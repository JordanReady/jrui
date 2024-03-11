import React from "react";

interface DemoPreviewProps {
  src: string;
}

const DemoPreview: React.FC<DemoPreviewProps> = ({ src }) => {
  return (
    <div className="md:w-[80%]  mb-2 border-gradient ">
      <video width="100%" loop={true} autoPlay={true} muted>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default DemoPreview;
