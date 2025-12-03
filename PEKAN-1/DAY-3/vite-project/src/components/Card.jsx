function Card({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      borderRadius: "12px",
      background: "#ffffff",
      marginBottom: "16px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      {children}
    </div>
  );
}

export default Card;
