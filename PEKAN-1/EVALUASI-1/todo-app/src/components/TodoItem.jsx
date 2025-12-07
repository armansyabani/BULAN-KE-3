import { useState } from "react";
import "../App.css";


export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
const [isEditing, setIsEditing] = useState(false);
const [newText, setNewText] = useState(todo.text);


const handleSave = () => {
if (newText.trim() === "") return;
editTodo(todo.id, newText);
setIsEditing(false);
};


return (
<div className="todo-item">
<input
type="checkbox"
checked={todo.completed}
onChange={() => toggleTodo(todo.id)}
/>


{isEditing ? (
<input
className="edit-input"
value={newText}
onChange={(e) => setNewText(e.target.value)}
/>
) : (
<span className={todo.completed ? "completed" : ""}>{todo.text}</span>
)}


<div className="btn-group">
{isEditing ? (
<button className="btn-save" onClick={handleSave}>Simpan</button>
) : (
<button className="btn-edit" onClick={() => setIsEditing(true)}>Edit</button>
)}


<button className="btn-delete" onClick={() => deleteTodo(todo.id)}>
Hapus
</button>
</div>
</div>
);
}
