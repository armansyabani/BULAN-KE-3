import React, { useState, useEffect } from "react";

function SimpleEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Komponen dirender atau di-update. Count:", count);
  });

  return (
    <div>
      <h2>useEffect Sederhana</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah Count</button>
    </div>
  );
}

export default SimpleEffect;
