import useCounterWithToggle from "../hooks/useCounterWithToggle";

export default function CounterToggleExample() {
  const { count, increment, decrement, visible, toggle } =
    useCounterWithToggle();

  return (
    <div className="card">
      <h2>Hook Composition</h2>
      <button onClick={toggle}>Toggle Counter</button>

      {visible && (
        <>
          <p>Count: {count}</p>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </>
      )}
    </div>
  );
}
