// import { useEffect, useState } from "react";
// import "./App.css";
// import UserCard from "./components/UserCard";

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
// function App() {
//   const [users, setUsers] = useState([
//     { name: "Pratik", age: 21 },
//     { name: "Yash", age: 22 },
//     { name: "Kishan", age: 23 },
//   ]);

//   const [showUsers, setShowUsers] = useState(true);

//   return (
//     <>
//       <div>
//         <h1>Rendering Logic & Lists</h1>

//         <button
//           onClick={() => {
//             setShowUsers(!showUsers);
//           }}
//         >
//           {showUsers ? "Hide Users" : "Show Users"}
//         </button>

//         {showUsers && (
//           <div>
//             {users.map((user, index) => (
//               <UserCard key={index} name={user.name} age={user.age} />
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;

//Side Effects (useEffect)

// import { useEffect, useState } from "react";
// import Layout from "./components/Layout";
// import Header from "./components/Header";
// import Counter from "./components/Counter";
// import Toggle from "./components/Toggle";
// import TaskInput from "./components/TaskInput";
// import TaskList from "./components/TaskList";
// import Timer from "./components/Timer";

// function App() {
//   const [tasks, setTasks] = useState([
//     { id: 1, text: "Learn React Basics", completed: true },
//     { id: 2, text: "Build Mini Project", completed: false },
//     { id: 3, text: "Practice Hooks", completed: false },
//   ]);

//   const [showCompleted, setShowCompleted] = useState(true);

//   useEffect(() => {
//     console.log("Tasks changed:", tasks);
//   }, [tasks]);

//   const addTask = (text) => {
//     if (!text.trim()) return;

//     setTasks((prev) => [...prev, { id: Date.now(), text, completed: false }]);
//   };

//   const toggleTask = (id) => {
//     setTasks((prev) =>
//       prev.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   return (
//     <Layout>
//       <Header title="Smart Task Dashboard" />

//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <Counter count={tasks.length} />
//         <Timer />
//       </div>

//       <TaskInput addTask={addTask} />

//       <Toggle
//         showCompleted={showCompleted}
//         setShowCompleted={setShowCompleted}
//       />

//       <TaskList
//         tasks={tasks}
//         showCompleted={showCompleted}
//         toggleTask={toggleTask}
//       />

//       {tasks.length === 0 && <p>No tasks available</p>}
//     </Layout>
//   );
// }

// export default App;

//controll input field

// import React from "react";

// export default function App() {
//   const [formdata, setformdata] = React.useState({
//     name: "",
//     email: "",
//   });

//   const HandleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data : ", formdata);
//   };

//   return (
//     <div>
//       <h1>Form</h1>

//       <form onSubmit={HandleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           value={formdata.name}
//           onChange={(e) => setformdata({ ...formdata, name: e.target.value })}
//         />
//         <br />

//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={formdata.email}
//           onChange={(e) => setformdata({ ...formdata, email: e.target.value })}
//         />
//         <br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

//Link

// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import Counter from "./components/Counter";
// import Header from "./components/Header";

// export default function App() {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Header</Link>
//         <Link to="/counter">Counter</Link>
//       </nav>
//     </div>
//   );
// }

// import { React, useEffect, useState } from "react";

// export default function App() {
//   const [data, setdata] = useState([]);
//   const [loading, setloading] = useState(true);
//   const [error, seterror] = useState(null);

//   useEffect(() => {
//     const fetchdata = async () => {
//       try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         if (!res.ok) {
//           throw new Error("Something went wrong");
//         }
//         const result = await res.json();
//         setdata(result);
//         setloading(false);
//       } catch (err) {
//         seterror(err.message);
//       } finally {
//         setloading(false);
//       }
//     };

//     fetchdata();
//   }, []);

//   if (loading) return <p>Loading posts...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div>
//       <h2>Manual Fetch</h2>
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import api from "./api/axios";

// export default function App() {
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         setIsLoading(true);

//         const res = await api.get("/posts");
//         setPosts(res.data.slice(0, 5));
//       } catch (err) {
//         setError("Failed to fetch posts");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (isLoading) return <p>Loading posts...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div>
//       <h2>Axios with Interceptors</h2>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React from "react";
import { FaBeer } from "react-icons/fa";
export default function App() {
  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <h1 className="text-xl">Orcas</h1>
        <button className="bg-white text-blue-500 px-3 py-1 rounded">
          Login
        </button>
      </div>
      <div className="p-4 m-2 rounded-xl shadow-lg bg-yellow-400">
        <h2 className="text-lg font-semibold mb-2">Tailwind Card</h2>
        <p className="text-gray-600">This card uses only utility classes.</p>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="bg-gray-200 p-4">1</div>
        <div className="bg-gray-200 p-4">2</div>
        <div className="bg-gray-200 p-4">3</div>
      </div>

      <div className="flex flex-col md:flex-row p-4 bg-white shadow-lg rounded-xl">
        <img src="https://www.sakshi.com/gallery_images/2025/07/24/aneet%20padda6.jpg" />
        <div>
          <h2 className="text-lg font-bold">Responsive Card</h2>
          <p className="text-gray-600">
            Stacks on mobile, horizontal on desktop.
          </p>
        </div>
      </div>
      <button
        className="
        bg-blue-500 
        text-white 
        px-4 py-2 
        rounded-lg
        hover:bg-blue-600
        active:scale-95
        disabled:opacity-50
      "
        disabled={false}
      >
        Click Me
      </button>
      <div className="flex items-center gap-2 text-xl">
        <FaBeer />
        <span>Cheers!</span>
      </div>
    </div>
  );
}
