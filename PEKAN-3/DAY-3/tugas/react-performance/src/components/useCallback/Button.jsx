import React from "react";

const Button = React.memo(({ onClick }) => {
  console.log("🟣 Button Render");
  return <button onClick={onClick}>Klik Saya</button>;
});

export default Button;
