"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Link from "next/link";

const allPages = [
  "https://neontek.co.ke",
  "https://neontek.co.ke/about",
  "https://neontek.co.ke/services",
  "https://neontek.co.ke/portfolio",
  "https://neontek.co.ke/blog",
  "https://neontek.co.ke/contact"
];

const fragments: Record<string, string[]> = {
  home: ["home", "/"],
  about: ["about", "team", "company"],
  services: ["services", "offerings"],
  portfolio: ["portfolio", "projects", "work"],
  blog: ["blog", "news", "articles"],
  contact: ["contact", "support"]
};

function findRelatedPages(currentUrl: string | undefined) {
  if (!currentUrl) return [];

  const lowerUrl = currentUrl.toLowerCase();

  const matchedKeys = Object.entries(fragments)
    .filter(([_, keywords]) =>
      keywords.some((keyword) => lowerUrl.includes(keyword))
    )
    .map(([key]) => key);

  return allPages.filter((page) => {
    const pageFragment = page.toLowerCase();
    return (
      matchedKeys.some((key) =>
        fragments[key].some((k) => pageFragment.includes(k))
      ) && page !== currentUrl
    );
  });
}

export function SuggestedPages({ currentPage }: { currentPage?: string }) {
  const suggestions = findRelatedPages(currentPage);

  if (suggestions.length === 0) return null;

  return (
    <div className="w-full p-6 rounded-lg shadow-sm">
        <h2 className="text-xl mb-4 text-primary">You Might Also Like?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {suggestions.map((url) => (
          <motion.div
            key={url}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border border-gray-200 rounded-lg bg-white p-4 hover:shadow-md transition-shadow"
          >
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-blue-700 font-medium hover:underline break-all">
                  {url}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
