import "../App.css";


export default function TodoFilter({ filter, setFilter }) {
return (
<div className="filter-container">
<button
className={filter === "all" ? "active" : ""}
onClick={() => setFilter("all")}
>
Semua
</button>


<button
className={filter === "active" ? "active" : ""}
onClick={() => setFilter("active")}
>
Aktif
</button>


<button
className={filter === "completed" ? "active" : ""}
onClick={() => setFilter("completed")}
>
Selesai
</button>
</div>
);
}