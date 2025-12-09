import "../styles/styles.css";

function StatusSwitch({ status }) {
  let content;

  switch (status) {
    case "loading":
      content = <p className="loading">Sedang memuat data...</p>;
      break;
    case "success":
      content = <p className="success">Data berhasil dimuat!</p>;
      break;
    case "error":
      content = <p className="error">Terjadi kesalahan!</p>;
      break;
    default:
      content = <p>Status tidak dikenal.</p>;
  }

  return (
    <div className="card">
      <h2>Switch Rendering</h2>
      {content}
    </div>
  );
}

export default StatusSwitch;
