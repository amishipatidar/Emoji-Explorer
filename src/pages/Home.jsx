const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Hero Banner */}
      <section className="text-center py-32 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4 drop-shadow-lg animate-fadeIn">
          Welcome to Emoji Explorer 🚀
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8 animate-fadeIn delay-100">
          Dive into the world of emojis — Discover meanings, categories, and trends.
        </p>
        <a
          href="/explorer"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 animate-fadeIn delay-200"
        >
          Start Exploring
        </a>
      </section>

      {/* Cool Feature Highlights */}
      <section className="bg-white/5 backdrop-blur-sm py-16 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold mb-10 text-cyan-300">Why Emoji Explorer?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-slate-300">
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Meaningful Search</h3>
            <p>Find out what each emoji really means with our powerful search tool.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Curated Data</h3>
            <p>Explore a hand-picked collection of popular and trending emojis.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Easy to Use</h3>
            <p>Beautiful, responsive, and beginner-friendly UI built with React & Tailwind.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-slate-400 text-sm border-t border-white/10">
        © 2025 Emoji Explorer. Made with ❤️ using React & Tailwind CSS.
      </footer>
    </div>
  );
};

export default Home;
