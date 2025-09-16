import React, { useState, useEffect } from "react";
import "./home.css";

function Home() {
  const fullText = "Aspiring Full Stack Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let speed = isDeleting ? 50 : 150;

    // If typing is complete, pause for 1 second
    if (!isDeleting && index === fullText.length) {
      speed = 1000; // pause 1 second
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (index < fullText.length) {
          setDisplayedText(fullText.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          // After pause, start deleting
          setIsDeleting(true);
        }
      } else {
        setDisplayedText(fullText.substring(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);

  return (
    <div className="main">
      <h2>HELLO, I'M</h2>
      <h1>KARTHIKEYAN</h1>
      <p>
        {displayedText}
        <span className="cursor">|</span>
      </p>
    </div>
  );
}

export default Home;
