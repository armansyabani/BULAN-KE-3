import React, { useState, useEffect } from "react";

function MultipleEffects() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log("Name berubah:", name);
  }, [name]);

  return (
    <div>
      <h2>Multiple useEffect</h2>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah Count</button>

      <p>Name: {name}</p>
      <input
        type="text"
        placeholder="Ketik nama..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default MultipleEffects;
