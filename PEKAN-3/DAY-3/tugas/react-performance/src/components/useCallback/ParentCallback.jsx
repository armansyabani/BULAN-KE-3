import { useState, useCallback } from "react";
import Button from "./Button";

const ParentCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button ditekan");
  }, []);

  return (
    <div className="card">
      <h2>useCallback Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah Count</button>
      <Button onClick={handleClick} />
    </div>
  );
};

export default ParentCallback;
