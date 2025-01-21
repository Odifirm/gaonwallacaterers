import React, { useState, useEffect } from "react";

const TypingEffect = ({
  strings,
  speed = 200,
  delay = 2000,
  cursorChar = "_",
  loop = true,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isErasing) {
      if (displayedText.length < strings[index].length) {
        timeout = setTimeout(() => {
          setDisplayedText(
            (prev) => prev + strings[index][displayedText.length]
          );
        }, speed);
      } else if (displayedText.length === strings[index].length) {
        timeout = setTimeout(() => {
          setIsErasing(true);
        }, delay); // Wait before starting to erase
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, speed);
      } else {
        setIsErasing(false);
        setIndex((prev) => (prev + 1) % strings.length); // Loop through strings
        setIsComplete(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isErasing, index, strings, speed, delay]);

  return (
    <span className="underline dark:border-white uppercase">
      {displayedText}{" "}
      <span
        className="cursor "
        style={{ animation: ` blink 0.7s step-end infinite` }}
      >
        {isComplete ? "" : cursorChar}
      </span>
    </span>
  );
};

export default TypingEffect;
