// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
const URL=import.meta.env.VITE_API_URL || "https://jsonplaceholder.typicode.com/users"
function Users() {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchUsers() {
  //     try {
  //       const res = await fetch(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       const users = await res.json();
  //       setUsers(users);
  //     } catch  {
  //       setError("Failed to fetch users");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchUsers();
  // }, []);
 const { data, isPending, error, isError} = useQuery({
  queryKey: ["users"],
  queryFn: async () => {
    const res = await fetch(URL);
    if (error) {
      console.log("Yash")
      throw new Error("Failed to fetch users");
    }
    
    return res.json();
  },
  retry: false, 
  
});
console.log(data,isPending,error)

 if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  return (
    <ul>
      {data && data.map(user => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}

export default Users;

