import { createContext, useEffect, useState } from "react";
import React from "react";

export const EmojiContext = createContext();

const EmojiProvider = ({ children }) => {
  const [emojiList, setEmojiList] = useState([]);

  // useEffect(() => {
  //   fetch("/emojiData.json")
  //     .then(res => res.json())
  //     .then(data => setEmojiList(data))
  //     .catch(err => console.error("Failed to load emoji data", err));
  // }, []);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}emojiData.json`)
      .then(res => res.json())
      .then(data => setEmojiList(data))
      .catch(err => console.error("Failed to load emoji data", err));
  }, []);

  return (
    <EmojiContext.Provider value={{ emojiList }}>
      {children}
    </EmojiContext.Provider>
  );
};

export default EmojiProvider;


