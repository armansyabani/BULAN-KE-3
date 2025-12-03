// app.js
import React from "react";

/* ================================================================
   1. ProfileCard — Komponen JSX Kompleks
   ================================================================ */
function ProfileCard({ name, photo, bio, skills }) {
  return (
    <div style={styles.card}>
      <img src={photo} alt={name} style={styles.avatar} />

      <div>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.bio}>{bio}</p>

        <h4 style={styles.skillTitle}>Keahlian</h4>
        <div style={styles.skillList}>
          {skills.map((skill, index) => (
            <span style={styles.skillTag} key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   2. JSX + JavaScript Expressions
   ================================================================ */
function PriceSection() {
  const price = 150000;
  const discount = 10;
  const final = price - price * (discount / 100);

  const shout = (text) => text.toUpperCase();

  return (
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>Harga & Ekspresi JavaScript</h3>

      <p>Harga asli: Rp {price.toLocaleString()}</p>
      <p>Diskon: {discount}%</p>
      <p style={styles.highlight}>
        Harga akhir: Rp {final.toLocaleString()}
      </p>

      <p>{shout("selamat belajar react!")}</p>
    </div>
  );
}

/* ================================================================
   3. Conditional Rendering
   ================================================================ */
function UserStatus({ isLoggedIn, unread }) {
  return (
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>Status Pengguna</h3>

      <div style={styles.statusBox}>
        {isLoggedIn ? (
          <p style={styles.success}>✔ Login berhasil</p>
        ) : (
          <p style={styles.error}>✘ Anda belum login</p>
        )}

        {unread > 0 && <p>Ada {unread} pesan belum dibaca 📩</p>}
      </div>
    </div>
  );
}

/* ================================================================
   4. Render List dengan map()
   ================================================================ */
function ProductList({ items }) {
  return (
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>Daftar Produk</h3>

      <ul style={styles.productList}>
        {items.map((item) => (
          <li key={item.id} style={styles.productItem}>
            {item.icon} {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ================================================================
   MAIN APP
   ================================================================ */
export default function App() {
  const skills = ["React", "Node.js", "UI/UX Design", "State Management"];
  const products = [
    { id: 1, name: "Laptop", icon: "💻" },
    { id: 2, name: "Headset", icon: "🎧" },
    { id: 3, name: "Keyboard", icon: "⌨️" },
    { id: 4, name: "Monitor", icon: "🖥️" },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Evaluasi Harian React</h1>

      {/* layout dibuat grid supaya rapi */}
      <div style={styles.grid}>
        <ProfileCard
          name="Rizki Al-Fatih"
          photo="https://i.pravatar.cc/120"
          bio="Santri yang bersemangat mempelajari teknologi modern."
          skills={skills}
        />

        <PriceSection />
      </div>

      <UserStatus isLoggedIn={true} unread={2} />

      <ProductList items={products} />
    </div>
  );
}

/* ================================================================
   Styling Object (Professional Layout)
   ================================================================ */
const styles = {
  container: {
    padding: "30px",
    fontFamily: "Inter, Arial, sans-serif",
    maxWidth: "900px",
    margin: "auto",
  },

  title: {
    fontSize: "32px",
    marginBottom: "20px",
    fontWeight: 700,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
    marginBottom: "30px",
  },

  /* Profile Card */
  card: {
    display: "flex",
    gap: "16px",
    background: "#ffffff",
    padding: "18px",
    borderRadius: "14px",
    border: "1px solid #e3e3e3",
    alignItems: "center",
    boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
  },

  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  name: {
    margin: "0 0 6px 0",
  },

  bio: {
    margin: "0 0 8px 0",
    color: "#555",
    fontSize: "14px",
  },

  skillTitle: {
    marginBottom: "4px",
  },

  skillList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  },

  skillTag: {
    background: "#f0f0f0",
    padding: "5px 10px",
    borderRadius: "8px",
    fontSize: "12px",
  },

  /* Section */
  section: {
    background: "#fff",
    padding: "20px",
    borderRadius: "14px",
    border: "1px solid #eaeaea",
    marginBottom: "25px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
  },

  sectionTitle: {
    marginBottom: "10px",
  },

  highlight: {
    fontWeight: "bold",
    color: "#c0392b",
  },

  /* Status Box */
  statusBox: {
    padding: "10px",
    borderRadius: "8px",
    background: "#fafafa",
    border: "1px solid #eee",
  },

  success: { color: "green", fontWeight: 600 },
  error: { color: "red", fontWeight: 600 },

  /* Product List */
  productList: {
    paddingLeft: "18px",
  },

  productItem: {
    marginBottom: "6px",
    fontSize: "15px",
  },
};
