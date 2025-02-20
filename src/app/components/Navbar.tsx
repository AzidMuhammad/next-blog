"use client";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<{ name: string; href: string }[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuItems = [
    { name: "AI Transforming Industries", href: "#ai-industries" },
    { name: "Economic & Job Market Impact", href: "#economic-impact" },
    { name: "Case Studies: AI in Real Life", href: "#case-studies" },
    { name: "Future Trends in AI (2025 - 2030)", href: "#future-trends" },
    { name: "Challenges & Ethical Concerns", href: "#ai-challenges" },
    { name: "How to Adapt to AI", href: "#how-to-adapt" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    setFilteredItems(
      menuItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);  

  return (
    <>
      <nav className="flex justify-between items-center py-4 px-4 bg-white border-b relative">
        <button className="text-[#622A0F]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={36} /> : <Menu size={36} />}
        </button>

        {!isSearchOpen ? (
          <h1 className="md:text-4xl text-xl font-normal font-sans text-[#622A0F]">BLOG</h1>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 mx-4"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#622A0F] bg-white"
            />
          </motion.div>
        )}

        <button className="text-[#622A0F]" onClick={() => setIsSearchOpen(!isSearchOpen)}>
          {isSearchOpen ? <X size={24} /> : <Search size={24} />}
        </button>
      </nav>

      {isOpen && (
        <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-3/4 md:w-96 h-screen bg-white shadow-lg p-6 flex flex-col space-y-4 z-50"
        >
            <button className="self-end text-[#622A0F]" onClick={() => setIsOpen(false)}>
            <X size={32} />
            </button>
            <div className="relative">
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-xs sm:max-w-sm px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#622A0F]"
            />
            <Search className="absolute right-3 top-3 text-gray-500" size={20} />
            </div>
            {filteredItems.map((item, index) => (
            <a key={index} href={item.href} className="text-[#622A0F] font-semibold hover:underline">
                {item.name}
            </a>
            ))}
        </motion.div>
        )}
    </>
  );
}
