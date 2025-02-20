"use client"

import { useState } from "react";
import { Share2, Bookmark, BookmarkCheck } from "lucide-react";

export default function ArticleHero() {
  const [isSaved, setIsSaved] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "The Future of AI",
          text: "How Artificial Intelligence is Transforming the World",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  return (
    <div className="relative max-w-[1200px] mx-auto md:mt-8">
      <img
        src="/image/hero.webp"
        alt="Article Cover"
        className="w-full h-64 md:h-[530px] object-cover md:rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
      <div className="absolute inset-0 flex flex-col mx-auto p-8 md:p-32 -mt-4 text-white">
        <p className="text-xs md:text-sm font-semibold mb-4">EDITORIAL</p>
        <h2 className="text-2xl md:text-5xl font-bold max-w-4xl mb-2">
          The Future of AI: How Artificial
        </h2>
        <h2 className="text-2xl md:text-5xl font-bold max-w-4xl">
          Intelligence is Transforming the World
        </h2>
        <p className="text-xs md:text-sm mt-4">4 MINUTE READ</p>

        {/* Tombol Share & Save */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            <Share2 size={18} />
            Share
          </button>

          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              isSaved ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
            } text-white`}
          >
            {isSaved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
