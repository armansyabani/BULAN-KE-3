import "../styles/styles.css";

function IfElseStatus({ isLoggedIn }) {
  let message;

  if (isLoggedIn) {
    message = "Anda sedang login. Selamat datang kembali!";
  } else {
    message = "Anda belum login. Silakan login terlebih dahulu.";
  }

  return (
    <div className="card">
      <h2>Conditional Rendering — IF/ELSE</h2>
      <p>{message}</p>
    </div>
  );
}

export default IfElseStatus;
