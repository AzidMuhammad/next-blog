"use client";
import { useState, useEffect } from "react";

const articles = [
  {
    category: "ARTIFICIAL INTELLIGENCE",
    title: "The Future of AI: How It’s Reshaping Industries Globally",
    image: "https://i.pinimg.com/736x/f5/95/8b/f5958bc9ebe8fc09d7a8e5089963ac5d.jpg",
    label: "EDITORIAL"
  },
  {
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Understanding Machine Learning: A Beginner’s Guide to AI Algorithms",
    image: "https://i.pinimg.com/736x/b2/07/f0/b207f09d9f2a2a91eaa4a9d908ba32e1.jpg",
    label: "EDITORIAL"
  },
  {
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Ethical AI: Challenges and Solutions in the Age of Automation",
    image: "https://i.pinimg.com/736x/93/27/0a/93270ac7bdd63cd71841b61d74e5a269.jpg",
    label: "EDITORIAL"
  }
];

export function MostReadSection() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-20 p-4">
      <h2 className="text-4xl font-bold text-center mb-6">Most Read Today</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src={article.image} alt={article.title} className="w-full h-72 object-cover" />
              <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
                {article.label}
              </span>
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase">{article.category}</p>
              <h3 className="text-lg font-bold mt-2">{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
