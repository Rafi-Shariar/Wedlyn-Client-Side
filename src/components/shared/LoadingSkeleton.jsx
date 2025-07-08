import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="max-w-sm w-full mx-auto p-4 border border-gray-200 rounded-2xl shadow-md animate-pulse bg-white grid grid-cols-2 items-center gap-3">
      <div className="h-40 bg-gray-200 rounded-xl mb-4" />
      <div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
      </div>

      <div className="col-span-2">
        <div className="h-8 bg-gray-200 rounded w-full mb-2" />

      </div>
     
    </div>
  );
};

export default LoadingSkeleton;
