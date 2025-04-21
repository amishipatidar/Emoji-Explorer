import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#141e30] to-[#243b55] text-white px-4">
      <div className="bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-2xl w-full text-center border border-white/10">
        <h2 className="text-4xl font-bold mb-4 text-cyan-400 drop-shadow-md animate-fadeIn">
          About Emoji Explorer 🤓
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed animate-fadeIn delay-200">
          Emoji Explorer is a fun and simple tool to help you understand the meaning of emojis, 
          search through a huge collection, and see what’s trending in real-time.
          <br /><br />
          Built with <span className="text-red-400 font-semibold">❤️</span> using 
          <span className="text-blue-400 font-semibold"> React</span> and 
          <span className="text-blue-400 font-semibold"> Tailwind CSS</span>. Whether you're texting, posting, 
          or just curious, we’ve got the emoji knowledge you need!
        </p>
      </div>
    </div>
  );
};

export default About;
