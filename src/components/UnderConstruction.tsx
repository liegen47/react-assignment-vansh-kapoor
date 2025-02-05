import React from "react";

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-lvh">
      <img
        src="/images/Under construction-bro.svg"
        alt="Under Construction"
        className="w-full sm:w-1/3"
      />
      <div className="text-3xl font-bold text-center">Under Construction</div>
      <div className="text-lg text-center mt-4">
        We're working hard to bring you new features. Please check back later!
      </div>
    </div>
  );
};

export default UnderConstruction;
