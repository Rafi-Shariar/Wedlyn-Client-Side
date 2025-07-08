import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="max-w-sm w-full mx-auto p-4 border border-gray-200 rounded-2xl shadow-md animate-pulse bg-white">
      <div className="h-40 bg-gray-200 rounded-xl mb-4" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
      <div className="flex items-center space-x-4 mt-4">
        <div className="h-10 w-10 bg-gray-200 rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="h-3 w-3/5 bg-gray-200 rounded" />
          <div className="h-3 w-2/5 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
