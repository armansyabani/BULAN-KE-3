import React, { useState, useEffect } from "react";

function UserData() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    console.log("Mengambil data untuk userId:", userId);

    const dummyUsers = {
      1: { name: "Ali", email: "ali@example.com" },
      2: { name: "Budi", email: "budi@example.com" },
      3: { name: "Citra", email: "citra@example.com" },
    };

    const timer = setTimeout(() => {
      setUser(dummyUsers[userId]);
    }, 500);

    return () => clearTimeout(timer);
  }, [userId]);

  return (
    <div>
      <h2>Data Pengguna</h2>
      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
      <button onClick={() => setUserId(3)}>User 3</button>

      <p>ID: {userId}</p>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserData;
