import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const status = useSelector((state) => state.users.status);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Users</h2>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Gagal mengambil data</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
