import { useContext } from "react";
import { EmojiContext } from "../context/EmojiContext";

const popularEmojis = ['😂', '❤️', '🔥', '🙏', '👍', '😍', '🥺', '😭', '😘', '😊', '😁', '🤔', '🙌', '💀', '😎'];

const Popular = () => {
  const { emojiList } = useContext(EmojiContext);

  const popularEmojiData = emojiList.filter(item => popularEmojis.includes(item.emoji));

  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold mb-6 text-white">Popular Emojis 📈</h1>
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
  );
};

export default Popular;

