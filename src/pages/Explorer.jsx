import EmojiSearch from "../components/EmojiSearch";
import React from 'react';

const Explorer = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      
      <div className="flex-1 py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* <h1 className="text-3xl font-bold mb-6 text-white">Emoji Explorer 🔍</h1> */}
          <h2 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4 drop-shadow-lg animate-fadeIn">
           Emoji Explorer 🔍
        </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 animate-fadeIn delay-75">
            Search and discover emoji meanings, categories, and sentiments.
          </p>
          <EmojiSearch />
        </div>
      </div>

      <footer className="text-center py-6 text-slate-400 text-sm border-t border-white/10">
        © 2025 Emoji Explorer. Made with ❤️ using React & Tailwind CSS.
      </footer>

    </div>
  );
};

export default Explorer;

