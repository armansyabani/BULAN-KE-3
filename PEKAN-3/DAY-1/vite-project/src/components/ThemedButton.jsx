import React, { useContext } from "react";
import ThemeContext from "../contexs/ThemeContext"; // Import context yang sudah dibuat

function ThemedButton() {
  // Menggunakan useContext untuk mengakses nilai dari ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonStyle = {
    backgroundColor: theme === "light" ? "#d12424ff" : "#333",
    color: theme === "light" ? "#333" : "#ce2121ff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      Ganti Tema ({theme})
    </button>
  );
}

export default ThemedButton;
