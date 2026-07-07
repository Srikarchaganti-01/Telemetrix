import React, { useEffect, useState } from "react";
import { databases } from "../../lib/appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = "news";

function FIAUpdates() {
  const [news, setNews] = useState([]);
  const [currentNews, setCurrentNews] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);

        setNews(res.documents);
      } catch (err) {
        console.log("Error fetching FIA updates:", err);
      }
    }

    fetchNews();
  }, []);

  useEffect(() => {
    if (paused || news.length === 0) return;

    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev === news.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, news]);

  useEffect(() => {
    setCurrentNews(0);
  }, [news]);

  if (!news.length) {
    return (
      <div className="w-full bg-zinc-900 rounded-xl min-h-75 flex items-center justify-center text-gray-400">
        Loading FIA Updates & Current News...
      </div>
    );
  }

  const item = news[currentNews];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="w-full bg-zinc-900 rounded-xl overflow-hidden shadow-lg min-h-full flex flex-col justify-between flex-1"
    >
      <div className="h-72 bg-black">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <h2 className=" font-bold mb-2 line-clamp-2">{item.title}</h2>
        <p className="text-gray-400 text-sm line-clamp-5">{item.description}</p>
      </div>

      <div className="bg-red-900 px-4 py-3 flex items-center gap-2">
        <span className="italic font-bold uppercase text-xs">{item.type}</span>
        <span className="text-sm truncate opacity-90">{item.title}</span>
      </div>
    </div>
  );
}

export default FIAUpdates;
