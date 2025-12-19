import { useState, useMemo } from "react";

const HeavyCalculation = () => {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);

  const result = useMemo(() => {
    console.log("🔥 Perhitungan berat dijalankan");
    let total = 0;
    for (let i = 0; i < 50000000; i++) {
      total += number;
    }
    return total;
  }, [number]);

  return (
    <div className="card">
      <h2>useMemo Demo</h2>
      <p>Hasil: {result}</p>
      <button onClick={() => setNumber(number + 1)}>Ubah Number</button>
      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>
    </div>
  );
};

export default HeavyCalculation;
