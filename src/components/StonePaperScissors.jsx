import React, { useState } from "react";

function StonePaperScissors() {
  const choices = ["Stone", "Paper", "Scissors"];
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(compChoice);

    if (choice === compChoice) {
      setResult("It's a Draw!");
    } else if (
      (choice === "Stone" && compChoice === "Scissors") ||
      (choice === "Paper" && compChoice === "Stone") ||
      (choice === "Scissors" && compChoice === "Paper")
    ) {
      setResult("You Win 🎉");
    } else {
      setResult("Computer Wins 🤖");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Stone Paper Scissors ✊✋✌</h2>
      <div style={{ margin: "20px" }}>
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => playGame(choice)}
            style={{ margin: "10px", padding: "10px 20px", fontSize: "18px" }}
          >
            {choice}
          </button>
        ))}
      </div>
      {userChoice && (
        <div>
          <p>You chose: {userChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <h3>{result}</h3>
        </div>
      )}
    </div>
  );
}

export default StonePaperScissors;
