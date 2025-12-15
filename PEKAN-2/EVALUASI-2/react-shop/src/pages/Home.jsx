import { useEffect, useState, useContext } from "react";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import CartBadge from "../components/CartBadge";
import { ThemeContext } from "../context/ThemeContext";


const Home = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const [search, setSearch] = useState("");
const [category, setCategory] = useState("all");


const { theme, dispatch } = useContext(ThemeContext);


useEffect(() => {
fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {
setProducts(data);
setLoading(false);
})
.catch(() => {
setError(true);
setLoading(false);
});
}, []);


const filteredProducts = products.filter(p => {
const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
const matchCategory = category === "all" || p.category === category;
return matchSearch && matchCategory;
});


return (
  <div className={`${theme} container`}>
    <div className="header">
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
      <CartBadge />
    </div>

    <div className="controls">
      <SearchBar setSearch={setSearch} />
      <CategoryFilter setCategory={setCategory} />
    </div>

    {loading && <p>Loading...</p>}
    {error && <p>Gagal memuat data</p>}

    {!loading && !error && (
      <ProductList products={filteredProducts} />
    )}
  </div>
);
};


export default Home;