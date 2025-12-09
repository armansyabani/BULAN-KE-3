import "../styles/styles.css";

function TernaryAnd({ isLogin, newMessages }) {
  return (
    <div className="card">
      <h2>Ternary Operator & Logical &&</h2>

      <p>{isLogin ? "Halo! Anda sudah login." : "Silakan login dulu."}</p>

      {newMessages > 0 && (
        <p className="highlight">Anda memiliki {newMessages} pesan baru!</p>
      )}
    </div>
  );
}

export default TernaryAnd;
