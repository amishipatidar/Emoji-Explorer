import { useContext, useState } from "react";
import { EmojiContext } from "../context/EmojiContext";
import React from 'react';

const EmojiSearch = () => {
  const { emojiList } = useContext(EmojiContext);
  const [search, setSearch] = useState("");

  const filtered = emojiList.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.emoji.includes(search)
  );

  return (
    <div className="mt-6 w-full">
      <input
        type="text"
        placeholder="Search for an emoji..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-md bg-slate-800 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />

      {search && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800 border border-slate-600 p-6 rounded-2xl shadow hover:scale-105 transition-transform duration-200"
              >
                <div className="text-5xl mb-3">{item.emoji}</div>
                <p className="text-sm text-slate-300 font-semibold mb-1">{item.name}</p>
                {item.description && (
                  <p className="text-xs text-slate-400 mb-1">{item.description}</p>
                )}
                {item.sentiment && (
                  <p className="text-xs text-cyan-400">Sentiment: {item.sentiment}</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No emoji found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default EmojiSearch;




