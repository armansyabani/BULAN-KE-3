import "../styles/styles.css";

function ProductList({ products }) {
  return (
    <div className="card">
      <h2>Rendering List Produk</h2>

      {products.length === 0 ? (
        <p className="empty">Belum ada produk tersedia.</p>
      ) : (
        <ul className="product-list">
          {products.map((item) => (
            <li key={item.id} className="product-item">
              <strong>{item.name}</strong>
              <span>Rp{item.price.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
