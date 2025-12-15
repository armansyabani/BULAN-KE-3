import { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
const [state, dispatch] = useReducer(cartReducer, { count: 0 });


return (
<CartContext.Provider value={{ state, dispatch }}>
{children}
</CartContext.Provider>
);
};