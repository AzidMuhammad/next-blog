"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const article = {
  title: "How AI is Transforming Business and Society?",
  content: "Artificial Intelligence (AI) is revolutionizing industries by automating processes, enhancing decision-making, and driving efficiency. From healthcare to finance, AI is reshaping how businesses operate and interact with customers. Implementing AI-driven strategies allows companies to harness data, optimize workflows, and innovate at an unprecedented scale.",
  author: {
    name: "Azid Muhammad",
    role: "Full-Stack Developer",
    profileImage: "https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg",
    linkedin: "https://linkedin.com/in/emilycarter",
    github: "https://github.com/AzidMuhammad"
  },
  tags: [
    "artificial intelligence",
    "machine learning",
    "deep learning",
    "automation",
    "AI ethics",
    "technology"
  ]
};

export function ArticleSection() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-20 p-4 rounded-lg bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{article.title}</h2>
      <p className="text-gray-700 mb-6 text-xl">{article.content}</p>
      <div className="flex items-center border-t pt-4">
        <img src={article.author.profileImage} alt={article.author.name} className="w-20 h-20 rounded-full mr-4" />
        <div>
          <p className="text-gray-800 font-semibold text-lg">{article.author.name}</p>
          <p className="text-md text-gray-600">{article.author.role}</p>
          <div className="flex space-x-2 mt-1">
            <a href={article.author.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 text-xl">
              <FaGithub />
            </a>
            <a href={article.author.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {article.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-md">{tag}</span>
        ))}
      </div>
    </div>
  );
}