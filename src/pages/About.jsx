import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-[#141e30] to-[#243b55] text-white px-4">
      
      <div className="flex-1 flex flex-col items-center text-center pt-32">
        <h2 className="text-[60px] font-bold text-cyan-400 mb-4 drop-shadow-lg animate-fadeIn">
          About Emoji Explorer 🤓
        </h2>
        
        <p className="text-lg text-gray-300 leading-relaxed px-4 animate-fadeIn delay-200 w-full max-w-7xl">
          Whether you're curious about the meaning behind a new emoji, looking for the perfect symbol to express your feelings,
          or just exploring the colorful world of digital expression — Emoji Explorer has you covered. Our mission is to make emojis more 
          understandable and fun for everyone. From classic favorites to the latest releases, you’ll find detailed meanings, 
          usage examples, and real-time trends to keep your conversations fresh and expressive.
          Dive in, discover hidden gems, and level up your emoji game today with Emoji Explorer! 🌟

          <br /><br />
          Built with <span className="text-red-400 font-semibold">❤️</span> using 
          <span className="text-blue-400 font-semibold"> React</span> and 
          <span className="text-blue-400 font-semibold"> Tailwind CSS</span>. Whether you're texting, posting, 
          or just curious, we’ve got the emoji knowledge you need!
        </p>
      </div>

      <footer className="text-center py-6 text-slate-400 text-sm border-t border-white/10">
        © 2025 Emoji Explorer. Made with ❤️ using React & Tailwind CSS.
      </footer>
    </div>
  );
};

export default About;
