import ToggleExample from "./components/ToggleExample";
import FetchExample from "./components/FetchExample";
import CounterToggleExample from "./components/CounterToggleExample";
import FormExample from "./components/FormExample";
import ThemeExample from "./components/ThemeExample";
import "./index.css"; 

export default function App() {
  return (
    <div className="container">
      <h1>Evaluasi Harian - Custom Hooks</h1>
      <ToggleExample />
      <FetchExample />
      <CounterToggleExample />
      <FormExample />
      <ThemeExample />
    </div>
  );
}
