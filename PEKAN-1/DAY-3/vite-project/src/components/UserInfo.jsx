import Avatar from "./Avatar";

function UserInfo({ name, avatar }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <Avatar src={avatar} />
      <strong style={{ fontSize: "16px" }}>{name}</strong>
    </div>
  );
}

export default UserInfo;
