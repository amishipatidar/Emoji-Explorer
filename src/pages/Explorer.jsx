import EmojiSearch from "../components/EmojiSearch";

const Explorer = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6 text-white">Emoji Explorer 🔍</h1>
        <p className="text-slate-300 text-base sm:text-lg mb-8 animate-fadeIn delay-75">
          Search and discover emoji meanings, categories, and sentiments.
        </p>
        <EmojiSearch />
      </div>
    </div>
  );
};

export default Explorer;

