import React, { useState, useEffect } from "react";

function SimulatedFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        id: 1,
        title: "Belajar useEffect",
        description: "Ini data simulasi dari server.",
      });
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Simulasi Fetch Data</h2>
      <p>ID: {data.id}</p>
      <p>Judul: {data.title}</p>
      <p>Deskripsi: {data.description}</p>
    </div>
  );
}

export default SimulatedFetch;
