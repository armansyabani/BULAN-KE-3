// App.jsx (Menggabungkan ThemeContext dan UserContext)
import ThemeProvider from "./contexs/ThemeProvider"; // Dari contoh sebelumnya
import UserProvider from "./contexs/UserProvider";
import ThemedButton from "./components/ThemedButton"; // Dari contoh sebelumnya
import ThemedParagraph from "./components/ThemedParagraph"; // Dari contoh sebelumnya
import UserInfoDisplay from "./components/UserInfoDisplay";

function App() {
  return (
    <ThemeProvider>
      {" "}
      {/* Provider pertama */}
      <UserProvider>
        {" "}
        {/* Provider kedua */}
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h2>Aplikasi dengan Multiple Contexts</h2>
          <ThemedButton />
          <ThemedParagraph />
          <hr />
          <UserInfoDisplay />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
