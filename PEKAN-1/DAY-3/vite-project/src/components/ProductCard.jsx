function ProductCard({ productName, price, stock, isAvailable }) {
  return (
    <div style={{
      border: "2px solid #007bff",
      padding: "16px",
      borderRadius: "12px",
      width: "250px",
      marginBottom: "14px",
      background: "#f9f9f9"
    }}>
      <h3 style={{ color: "#007bff", marginBottom: "8px" }}>{productName}</h3>
      <p>Harga: <strong>Rp {price}</strong></p>
      <p>Stok: {stock}</p>
      <p>Status: {isAvailable ? "Tersedia" : "Habis"}</p>
    </div>
  );
}

// default props
ProductCard.defaultProps = {
  price: 0,
  stock: "Tidak ada informasi",
  isAvailable: false
};

export default ProductCard;
