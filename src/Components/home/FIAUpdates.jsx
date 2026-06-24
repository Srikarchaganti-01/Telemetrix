import React from "react";
import { useEffect, useState } from "react";
import news from "../../data/news";

function FIAUpdates() {
  const [currentNews, setCurrentNews] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev === news.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  const item = news[currentNews];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="w-full bg-zinc-900 rounded-xl overflow-hidden shadow-lg min-h-full flex flex-col justify-between flex-1"
    >
      <div className="h-70">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
        <p className="text-gray-400 text-sm">{item.description}</p>
      </div>

      <div className="bg-red-900 px-4 py-3 flex items-center gap-2">
        <span className=" italic font-bold">{item.tag}</span>
        <span className="text-sm truncate">{item.title}</span>
      </div>
    </div>
  );
}

export default FIAUpdates;
