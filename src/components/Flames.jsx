import React, { useState } from "react";

function Flames() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const flamesResult = ["Friends", "Love", "Affection", "Marriage", "Enemy", "Siblings"];

  const calculateFlames = () => {
    let n1 = name1.toLowerCase().replace(/\s+/g, "");
    let n2 = name2.toLowerCase().replace(/\s+/g, "");

    for (let char of n1) {
      if (n2.includes(char)) {
        n1 = n1.replace(char, "");
        n2 = n2.replace(char, "");
      }
    }

    const count = n1.length + n2.length;
    if (count === 0) {
      setResult("Perfect Match ❤️");
      return;
    }

    let flames = [...flamesResult];
    let index = 0;

    while (flames.length > 1) {
      index = (index + count - 1) % flames.length;
      flames.splice(index, 1);
    }

    setResult(flames[0]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>FLAMES Game 🔥</h2>
      <input
        type="text"
        placeholder="Enter Name 1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        style={{ padding: "10px", margin: "5px" }}
      />
      <input
        type="text"
        placeholder="Enter Name 2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        style={{ padding: "10px", margin: "5px" }}
      />
      <br />
      <button onClick={calculateFlames} style={{ marginTop: "10px", padding: "10px 20px" }}>
        Calculate
      </button>
      {result && <h3 style={{ marginTop: "20px" }}>Result: {result}</h3>}
    </div>
  );
}

export default Flames;
