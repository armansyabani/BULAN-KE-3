import TodoItem from "./TodoItem";
import "../App.css";


export default function TodoList({ todos, toggleTodo, deleteTodo }) {
return (
<div className="todo-list">
{todos.length === 0 ? (
<p className="empty-text">Tidak ada todo</p>
) : (
todos.map((todo) => (
<TodoItem
key={todo.id}
todo={todo}
toggleTodo={toggleTodo}
deleteTodo={deleteTodo}
/>
))
)}
</div>
);
}