import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString()); // ⚠️ using eval for simplicity
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
      <h2>Calculator</h2>
      <div
        style={{
          width: "240px",
          border: "2px solid #444",
          borderRadius: "10px",
          padding: "10px",
          background: "#f5f5f5",
        }}
      >
        {/* Display */}
        <input
          type="text"
          value={input}
          readOnly
          style={{
            width: "100%",
            height: "40px",
            marginBottom: "10px",
            fontSize: "20px",
            textAlign: "right",
            padding: "5px",
          }}
        />

        {/* Buttons */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
          {["7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "=", "+"
          ].map((btn) => (
            <button
              key={btn}
              onClick={() => (btn === "=" ? handleEqual() : handleClick(btn))}
              style={{ padding: "15px", fontSize: "18px", borderRadius: "8px", cursor: "pointer" }}
            >
              {btn}
            </button>
          ))}
          <button
            onClick={handleClear}
            style={{
              gridColumn: "span 4",
              padding: "15px",
              fontSize: "18px",
              borderRadius: "8px",
              background: "red",
              color: "white",
              cursor: "pointer",
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
