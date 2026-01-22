import { useEffect } from "react";
import toast from "react-hot-toast";
import useUsers from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

function UserHook() {
  const navigate=useNavigate();
  const { data, isPending, error, isError, isSuccess } = useUsers();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Users loaded successfully");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error("Failed to load users");
    }
  }, [isError]);

  if (isPending) return <p>Loading users...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
    <button onClick={() => navigate("/")}>
  Home
</button>
    <ul>
      {data.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
    </>
  );
}

export default UserHook;
