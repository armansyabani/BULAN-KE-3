import useToggle from "../hooks/useToggle";

export default function ToggleExample() {
  const [isVisible, toggleVisible] = useToggle();
  const [isOn, toggleOn] = useToggle();

  return (
    <div className="card">
      <h2>useToggle Example</h2>

      <button onClick={toggleVisible}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
      {isVisible && <p>Teks ini bisa di toggle</p>}

      <button onClick={toggleOn}>
        Switch: {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}
