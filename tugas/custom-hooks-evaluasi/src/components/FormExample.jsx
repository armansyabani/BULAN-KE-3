import useForm from "../hooks/useForm";

export default function FormExample() {
  const { values, handleChange } = useForm({
    name: "",
    email: ""
  });

  return (
    <div className="card">
      <h2>useForm Example</h2>

      <input
        name="name"
        placeholder="Nama"
        value={values.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />

      <p>Nama: {values.name}</p>
      <p>Email: {values.email}</p>
    </div>
  );
}
