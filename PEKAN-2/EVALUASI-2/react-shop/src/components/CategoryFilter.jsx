const CategoryFilter = ({ setCategory }) => {
return (
<select onChange={(e) => setCategory(e.target.value)}>
<option value="all">All</option>
<option value="electronics">Electronics</option>
<option value="jewelery">Jewelery</option>
<option value="men's clothing">Men's Clothing</option>
<option value="women's clothing">Women's Clothing</option>
</select>
);
};


export default CategoryFilter;