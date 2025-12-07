import { useState } from "react";
import "../App.css";


export default function TodoForm({ addTodo }) {
const [text, setText] = useState("");


const handleSubmit = (e) => {
e.preventDefault();
if (!text.trim()) return;
addTodo(text);
setText("");
};


return (
<form className="todo-form" onSubmit={handleSubmit}>
<input
type="text"
placeholder="Tambahkan todo..."
className="todo-input"
value={text}
onChange={(e) => setText(e.target.value)}
/>
<button className="btn-add">Tambah</button>
</form>
);
}