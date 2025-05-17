import { useContext } from "react";
import { EmojiContext } from "../context/EmojiContext";
import React from 'react';

const popularEmojis = ['😂', '❤️', '🔥', '🙏', '👍', '😍', '🥺', '😭', '😘', '😊', '😁', '🤔', '🙌', '💀', '😎'];

const Popular = () => {
  const { emojiList } = useContext(EmojiContext);

  const popularEmojiData = emojiList.filter(item => popularEmojis.includes(item.emoji));

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      
      <div className="flex-1 container mx-auto px-4 py-32 text-center">
        {/* <h1 className="text-3xl font-bold mb-6 text-white">Popular Emojis 📈</h1> */}
        <h2 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4 drop-shadow-lg animate-fadeIn">
        Popular Emojis 📈
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {popularEmojiData.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800 border border-slate-600 p-6 rounded-2xl shadow hover:scale-105 transition-transform duration-200"
            >
              <div className="text-5xl mb-3">{item.emoji}</div>
              <p className="text-sm text-slate-300 font-semibold mb-1">{item.name}</p>
              <p className="text-xs text-slate-400 mb-1">{item.description}</p>
              <p className="text-xs text-cyan-400">Sentiment: {item.sentiment}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center py-6 text-slate-400 text-sm border-t border-white/10">
        © 2025 Emoji Explorer. Made with ❤️ using React & Tailwind CSS.
      </footer>

    </div>
  );
};

export default Popular;
