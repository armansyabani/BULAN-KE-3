import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Home />
      </CartProvider>
    </ThemeProvider>
  );
}
// link vercel nya  : evalreact2.vercel.app/
export default App;
