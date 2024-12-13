import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <div>
      <button className="relative inline-block group p-[5px] overflow-hidden rounded-full focus:outline-none md:w-60 md:mt-10" onClick={handleClick}>
  {/* Outer gradient background with rounded-full */}
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform duration-300 group-hover:scale-110 rounded-full" />
  {/* Inner text container with rounded-full */}
  <div
    className={`relative z-10 flex items-center justify-center gap-2 px-8 py-2 text-white bg-black rounded-full group-hover:bg-transparent transition-colors duration-300 ${otherClasses}`}
  >
    {position === "left" && <span className="flex-shrink-0">{icon}</span>}
    <span>{title}</span>
    {position === "right" && <span className="flex-shrink-0">{icon}</span>}
  </div>
</button>


    </div>
  );
};

export default MagicButton;
