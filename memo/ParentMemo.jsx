import { useState } from "react";
import ChildMemo from "./ChildMemo";

const ParentMemo = () => {
  const [count, setCount] = useState(0);

  console.log("🟢 ParentMemo Render");

  return (
    <div className="card">
      <h2>React.memo Demo</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <ChildMemo name="Santri React" />
    </div>
  );
};

export default ParentMemo;
