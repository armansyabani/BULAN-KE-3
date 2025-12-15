import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  if (products.length === 0) return <p>Produk tidak ditemukan.</p>;

  return (
    <div className="products">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};
export default ProductList;
