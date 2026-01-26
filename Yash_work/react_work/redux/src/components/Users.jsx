import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice";
import { useEffect } from "react";

function Users() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.address}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Users;
