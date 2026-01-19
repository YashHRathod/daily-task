import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

// function App() {
//   const users = [
//     {
//       name: "Pratik",
//       age: 21,
//     },
//     {
//       name: "Yash",
//       age: 22,
//     },
//     {
//       name: "Kishan",
//       age: 23,
//     },
//   ];

//   return (
//     <>
//       <div>
//         {users.map((user, index) => (
//           <UserCard key={index} name={user.name} />
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;

// Counter App && Toggle App
// function App() {
//   const [value, setValue] = useState(0);
//   const [Isvisible, setIsvisible] = useState(false);

//   return (
//     <>
//       <div>
//         <h1>Counter && Toggle Project</h1>

//         <button
//           onClick={() => {
//             setIsvisible(!Isvisible);
//           }}
//         >
//           {Isvisible ? "Hide" : "Show"}
//         </button>

//         {Isvisible && (
//           <div>
//             <h2>Counter Value: {value}</h2>
//             <button onClick={() => setValue(value + 1)}>Increment</button>
//             <button onClick={() => setValue(value - 1)}>Decrement</button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;

// Rendering Logic & Lists
function App() {
  const [users, setUsers] = useState([
    { name: "Pratik", age: 21 },
    { name: "Yash", age: 22 },
    { name: "Kishan", age: 23 },
  ]);

  const [showUsers, setShowUsers] = useState(true);

  return (
    <>
      <div>
        <h1>Rendering Logic & Lists</h1>

        <button
          onClick={() => {
            setShowUsers(!showUsers);
          }}
        >
          {showUsers ? "Hide Users" : "Show Users"}
        </button>

        {showUsers && (
          <div>
            {users.map((user, index) => (
              <UserCard key={index} name={user.name} age={user.age} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
