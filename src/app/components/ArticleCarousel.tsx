"use client";
import { useState, useEffect } from "react";

const webinars = [
  {
    date: "FEB 26",
    title: "AI and the Future of Business: Emerging Trends and Innovations",
    description: "Discover how AI is reshaping industries with cutting-edge innovations and strategic implementations.",
    image: "https://i.pinimg.com/736x/d4/7d/ed/d47ded45213710012f9af45e100599b4.jpg",
  },
  {
    date: "FEB 27",
    title: "AI-Driven Customer Experience: Enhancing Engagement and Satisfaction",
    description: "Explore how AI-powered tools are transforming customer interactions and boosting satisfaction levels.",
    image: "https://i.pinimg.com/736x/cd/59/e6/cd59e66f5ab33968a85074f40c0896b5.jpg",
  },
  {
    date: "FEB 28",
    title: "Leveraging AI for Business Growth and Competitive Advantage",
    description: "Learn how AI can be used to drive business expansion, improve decision-making, and gain a competitive edge.",
    image: "https://i.pinimg.com/736x/85/c8/28/85c8282439fe8287a05c33a0a8becb29.jpg",
  },
  {
    date: "FEB 29",
    title: "Ethics and AI: Navigating Challenges in Responsible AI Development",
    description: "Understand the ethical implications of AI development and how to create responsible AI solutions.",
    image: "https://i.pinimg.com/736x/16/f2/4f/16f24f489ef1b3163c39d0d6d49989fd.jpg",
  },
];

export function ArticleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === Math.ceil(webinars.length / 2) - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-10 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-[#622A0F] mb-6 text-center">Learning Opportunities</h2>
      <div className="relative w-full max-w-4xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(webinars.length / 2) }).map((_, groupIndex) => (
            <div key={groupIndex} className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-shrink-0 w-full">
              {webinars.slice(groupIndex * 2, groupIndex * 2 + 2).map((webinar, index) => (
                <div key={index} className="bg-white rounded-lg border-2 overflow-hidden">
                  <img src={webinar.image} alt={webinar.title} className="w-full h-56 md:h-72 object-cover" />
                  <div className="p-4">
                    <p className="text-[#622A0F] font-semibold">{webinar.date}</p>
                    <h3 className="text-lg font-bold mt-2">{webinar.title}</h3>
                    <p className="text-gray-600 mt-2">{webinar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex mt-12 space-x-2">
        {Array.from({ length: Math.ceil(webinars.length / 2) }).map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentIndex ? "bg-[#622A0F]" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
