import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const CartBadge = () => {
const { state } = useContext(CartContext);
return <div>🛒 Cart: {state.count}</div>;
};


export default CartBadge;