import React from "react";
import SimpleEffect from "./components/SimpleEffect";
import UserData from "./components/UserData";
import WindowSizeTracker from "./components/WindowSizeTracker";
import MultipleEffects from "./components/MultipleEffects";
import SimulatedFetch from "./components/SimulatedFetch";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Tugas useEffect</h1>

      <SimpleEffect />
      <hr />

      <UserData />
      <hr />

      <WindowSizeTracker />
      <hr />

      <MultipleEffects />
      <hr />

      <SimulatedFetch />
    </div>
  );
}

export default App;
