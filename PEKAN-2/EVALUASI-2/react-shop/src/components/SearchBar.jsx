const SearchBar = ({ setSearch }) => {
return (
<input
placeholder="Cari produk..."
onChange={(e) => setSearch(e.target.value)}
/>
);
};


export default SearchBar;