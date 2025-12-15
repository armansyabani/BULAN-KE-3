import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const ProductCard = ({ product }) => {
const { dispatch } = useContext(CartContext);


return (
<div>
<img src={product.image} width={100} />
<h4>{product.title}</h4>
<p>Rp {product.price.toLocaleString("id-ID")}</p>
<button onClick={() => dispatch({ type: "ADD_ITEM" })}>
masukan ke keranjang
</button>
</div>
);
};



export default ProductCard;