// App.jsx
import React from "react";

// ======================
// GLOBAL STYLE
// ======================
const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px",
  background: "linear-gradient(to bottom right, #e3f2fd, #90caf9)",
  fontFamily: "Poppins, Arial, sans-serif",
};

const titleStyle = {
  color: "#0d47a1",
  fontSize: "32px",
  fontWeight: "700",
  marginBottom: "35px",
  textAlign: "center",
};

// ======================
// PROFILE CARD
// ======================
function ProfileCard({ name, photo, bio, skills }) {
  const cardStyle = {
    width: "350px",
    background: "#fff",
    padding: "25px",
    borderRadius: "22px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    marginBottom: "40px",
  };

  const imgStyle = {
    width: "100%",
    height: "260px",
    borderRadius: "18px",
    marginBottom: "18px",
    objectFit: "cover",
  };

  const skillStyle = {
    padding: "7px 14px",
    background: "#bbdefb",
    color: "#0d47a1",
    borderRadius: "10px",
    margin: "5px",
    display: "inline-block",
    fontSize: "14px",
    fontWeight: "600",
  };

  return (
    <div style={cardStyle}>
      <img src={photo} style={imgStyle} />

      <h2 style={{ color: "#0d47a1", fontSize: "24px", margin: "8px 0" }}>
        {name}
      </h2>

      <p style={{ color: "#455a64", fontSize: "15px", marginBottom: "12px" }}>
        {bio}
      </p>

      <h4 style={{ color: "#1565c0", marginBottom: "10px" }}>Keahlian:</h4>

      <div>
        {skills.map((skill, i) => (
          <span key={i} style={skillStyle}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

// ======================
// DISCOUNT CALCULATOR
// ======================
function DiscountPrice({ price, discount }) {
  const finalPrice = price - price * (discount / 100);

  const boxStyle = {
    width: "350px",
    background: "#fff",
    padding: "20px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    marginBottom: "30px",
  };

  return (
    <div style={boxStyle}>
      <h2 style={{ color: "#0d47a1", marginBottom: "10px" }}>
        Harga Setelah Diskon
      </h2>

      <p style={{ fontSize: "16px", color: "#37474f" }}>
        Harga Awal: <strong>Rp {price}</strong> <br />
        Diskon: <strong>{discount}%</strong> <br />
        <span style={{ fontSize: "18px", fontWeight: "700", color: "#0d47a1" }}>
          Harga Akhir: Rp {finalPrice}
        </span>
      </p>
    </div>
  );
}

// ======================
// CONDITIONAL RENDER
// ======================
function StatusMessage({ isLoggedIn }) {
  const textStyle = {
    fontSize: "18px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "25px",
  };

  return (
    <div>
      {isLoggedIn ? (
        <p style={{ ...textStyle, color: "green" }}>✔ Anda sudah login</p>
      ) : (
        <p style={{ ...textStyle, color: "red" }}>✖ Silakan login dulu</p>
      )}
    </div>
  );
}

// ======================
// LIST RENDERING
// ======================
function FruitList({ fruits }) {
  const sectionStyle = {
    width: "350px",
    textAlign: "center",
    background: "#fff",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  };

  const itemStyle = {
    background: "#e3f2fd",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "10px",
    fontWeight: "600",
    color: "#0d47a1",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  };

  return (
    <div style={sectionStyle}>
      <h3 style={{ color: "#0d47a1", marginBottom: "15px" }}>Daftar Buah</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {fruits.map((fruit, i) => (
          <li key={i} style={itemStyle}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ======================
// MAIN APP
// ======================
export default function App() {
  const fruitData = [
    "Apel Merah",
    "Jeruk Manis",
    "Mangga Harum Manis",
    "Semangka Mini",
    "Anggur Hitam",
    "Pepaya California",
    "Pisang Cavendish",
    "Strawberry",
    "Melon Hijau",
    "Kiwi",
  ];

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Tugas React Hari Kedua – Versi Rapi</h1>

      <ProfileCard
        name="Arman Sya'bani"
        photo="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800"
        bio="Santri yang bersemangat mempelajari React, UI/UX, dan Web Development."
        skills={[
          "React",
          "JavaScript",
          "HTML",
          "CSS",
          "UI Design",
          "Responsive Web",
        ]}
      />

      <DiscountPrice price={50000} discount={20} />

      <StatusMessage isLoggedIn={true} />

      <FruitList fruits={fruitData} />
    </div>
  );
}
