import { useEffect, useState } from "react";

const EmojiCard = ({ emoji, name }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchEmojiInfo = async () => {
      try {
        const response = await fetch(
          `https://emoji-api.com/emojis?search=${emoji}&access_key=7a7a8c595cfb3a7057c92c0d22c805ed0d88bd39`
        );
        const data = await response.json();

        if (data && data.length > 0) {
          setDetails({
            description: data[0].unicodeName || "No description available",
            sentiment: data[0].group || "Unknown sentiment",
          });
        } else {
          setDetails({
            description: "No description found",
            sentiment: "Unknown sentiment",
          });
        }
      } catch (error) {
        console.error("Error fetching emoji details:", error);
        setDetails({
          description: "Failed to load details",
          sentiment: "Error",
        });
      }
    };

    fetchEmojiInfo();
  }, [emoji]);

  return (
    <div className="bg-slate-800 border border-slate-600 p-6 rounded-2xl shadow hover:scale-105 transition-transform duration-200">
      <div className="text-5xl mb-2">{emoji}</div>
      <p className="text-sm text-slate-300 mb-1">{name}</p>
      {details ? (
        <>
          <p className="text-xs text-slate-400">{details.description}</p>
          <p className="text-xs text-blue-400 italic">Category: {details.sentiment}</p>
        </>
      ) : (
        <p className="text-xs text-gray-500">Loading details...</p>
      )}
    </div>
  );
};

export default EmojiCard;

  
