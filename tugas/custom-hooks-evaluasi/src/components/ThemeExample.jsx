import useLocalStorage from "../hooks/useLocalStorage";

export default function ThemeExample() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div className={`card ${theme}`}>
      <h2>Local Storage Theme</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Theme: {theme}
      </button>
    </div>
  );
}
