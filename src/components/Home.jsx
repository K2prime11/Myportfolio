import React, { useState, useEffect } from "react";
import "./home.css";



function Home() {
  const fullText = "Aspiring Full Stack Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 50 : 150;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === fullText.length) {
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
