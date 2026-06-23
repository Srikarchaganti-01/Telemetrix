import React from "react";

function Error404() {
  return (
    <div className="flex justify-between m-20">
      <div className="w-3/5">
        <div className="text-yellow-500 text-4xl font-bold mb-5">
          YELLOW FLAG
        </div>
        <div className="text-3xl text-gray-400 italic mb-10">
          Looks like you've gone off the racing line.
        </div>
        <div className="text-xl mb-20">
          The page you're trying to reach spun out somewhere in Turn 1 and
          hasn't returned to the paddock yet.
        </div>
        <div className="text-3xl font-semibold ">Race Control Message:</div>
        <div className="text-2xl">Error 404 — Page Not Found</div>
        <div className="text-xl">[ Return to Paddock ]</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-9xl">404</div>
        <div className="text-5xl">Page Not Found</div>
      </div>
    </div>
  );
}

export default Error404;
