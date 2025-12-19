import { useState, lazy, Suspense } from "react";
import ParentMemo from "./components/memo/ParentMemo";
import HeavyCalculation from "./components/useMemo/HeavyCalculation";
import ParentCallback from "./components/useCallback/ParentCallback";
import "./components/styles/main.css"

const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Profile = lazy(() => import("./components/pages/Profile"));

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "home") return <Home />;
    if (page === "about") return <About />;
    if (page === "profile") return <Profile />;
  };

  return (
    <div className="container">
      <h1>Evaluasi Performa React</h1>

      <ParentMemo />
      <HeavyCalculation />
      <ParentCallback />

      <div className="card">
        <h2>Lazy Loading</h2>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("profile")}>Profile</button>

        <Suspense fallback={<p>Loading...</p>}>
          {renderPage()}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
