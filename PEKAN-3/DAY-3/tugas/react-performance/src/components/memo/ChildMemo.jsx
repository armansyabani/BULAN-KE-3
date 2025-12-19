import React from "react";

const ChildMemo = React.memo(({ name }) => {
  console.log("🔵 ChildMemo Render");
  return <h3>Halo, {name}</h3>;
});

export default ChildMemo;


