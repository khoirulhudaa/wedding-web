import React from "react";

const LoadingModal = () => {
  return (
    <div className="flex items-center border-y border-black justify-center w-full h-full bg-opacity-75">
      <div className="w-20 h-20 border-8 border-t-8 border-white border-opacity-50 rounded-full animate-spin border-r-blue-500"></div>
    </div>
  );
};

export default LoadingModal;
