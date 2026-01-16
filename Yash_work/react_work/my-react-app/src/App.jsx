// import { useState } from 'react';
import Layout from "./components/Layout";
import UserCard from "./components/UserCard";
import './App.css';
import Todo from './components/Todo';
function App() {
  // const [user, setuser] = useState('');
  // const [bool, setbool] = useState(true);
  // const addUser = () => {
  //   setuser({ role: 'admin', age: 20 });
  //   setbool(false);
  // };
  // const removeUser = () => {
  //   setuser(null);
  //   setbool(true);
  // };
  // const title = user && user.age > 18 && user.role === 'admin' ? 'Welcome Admin' : 'Access Denied';

  return (
    <>
      {/* <h1 className="heading">{title}</h1>
      {bool ? (
        <button onClick={addUser}>Add User</button>
      ) : (
        <button onClick={removeUser}>Remove admin</button>
      )} */}
        {/* <Layout>
      <UserCard
        name="Yash"
        age={21}
        user={{ role: "admin" }}
      />
    </Layout> */}
    <Todo />
    </>
  );
}

export default App;
