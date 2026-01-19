import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  const users = [
    {
      name: "Pratik",
      age: 21,
    },
    {
      name: "Yash",
      age: 22,
    },
    {
      name: "Kishan",
      age: 23,
    },
  ];

  return (
    <>
      <div>
        {users.map((user, index) => (
          <UserCard key={index} name={user.name} />
        ))}
      </div>
    </>
  );
}

export default App;
