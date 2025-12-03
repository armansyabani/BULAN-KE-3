import UserInfo from "./UserInfo";
import CommentText from "./CommentText";

function Comment({ name, avatar, text }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "16px",
      borderRadius: "10px",
      width: "300px",
      background: "#fafafa",
      marginBottom: "16px"
    }}>
      <UserInfo name={name} avatar={avatar} />
      <CommentText text={text} />
    </div>
  );
}

export default Comment;
