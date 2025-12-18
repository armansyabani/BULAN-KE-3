import useFetch from "../hooks/useFetch";

export default function FetchExample() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <div className="card">
      <h2>useFetch Example</h2>
      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
