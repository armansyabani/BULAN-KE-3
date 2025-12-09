import "./index.css";
import IfElseStatus from "./components/IfElseStatus";
import TernaryAnd from "./components/TernaryAnd";
import StatusSwitch from "./components/StatusSwitch";
import ProductList from "./components/ProductList";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 8500000 },
    { id: 2, name: "Keyboard", price: 300000 },
    { id: 3, name: "Mouse", price: 150000 },
  ];

  return (
    <div className="container">
      <h1>Modul 2.2 - Conditional Rendering & List</h1>

      <IfElseStatus isLoggedIn={true} />
      <TernaryAnd isLogin={true} newMessages={4} />
      <StatusSwitch status="success" />
      <ProductList products={products} />
    </div>
  );
}

export default App;
