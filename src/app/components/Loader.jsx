import React from "react";
import { useLoader } from "../context/LoaderContext";

const Loader = () => {
  const { loadingContext } = useLoader();

  if (!loadingContext) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="p-4 bg-white rounded-lg text-center">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
