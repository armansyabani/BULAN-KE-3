function Avatar({ src }) {
  return (
    <img 
      src={src}
      alt="User Avatar"
      style={{ 
        width: "50px",
        height: "50px",
        borderRadius: "50%"
      }}
    />
  );
}

export default Avatar;
