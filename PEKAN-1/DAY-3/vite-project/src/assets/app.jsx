import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";
import Card from "./components/Card";
import Comment from "./components/Comment";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Evaluasi Hari Ketiga</h1>

      {/* Greeting */}
      <Greeting name="Arman" />
      <Greeting name="Budi" />

      {/* ProductCard */}
      <ProductCard 
        productName="Akun Netflix Premium" 
        price={50000}
        stock={12}
        isAvailable={true}
      />

      <ProductCard 
        productName="Spotify Premium"
      />

      {/* Card with Children */}
      <Card>
        <h3>Judul Card</h3>
        <p>Ini adalah konten di dalam Card.</p>
      </Card>

      <Card>
        <button style={{
          padding: "10px 16px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "8px"
        }}>
          Tombol Dalam Card
        </button>
      </Card>

      {/* Comment Component */}
      <Comment 
        name="Arman Sya’bani"
        avatar="https://via.placeholder.com/50"
        text="Halo! Ini komentar pertama saya."
      />
    </div>
  );
}

export default App;
