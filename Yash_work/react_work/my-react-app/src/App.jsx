// import { useState } from 'react';
import Layout from './components/Layout';
import UserCard from './components/UserCard';
// import './App.css';
import Todo from './components/Todo';
import Counter from './components/Counter';
import Form from './components/Form';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  // const [user, setuser] = useState('');
  // const [name, setName] = useState("");
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
      {/* <Todo /> */}
      {/* <Counter/> */}
      {/* <Users /> */}

      {/* <Form/> */}

      {/* <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>You typed: {name}</p> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/Todo" element={<Todo />} />
        <Route
          path="/usercard"
          element={
            <Layout>
              <UserCard name="Yash" age={21} user={{ role: 'admin' }} />
            </Layout>
          }
          
        />
        <Route path="/counter" element={<Counter/>}/>
          <Route path="/form/:id" element={<Form />} />

        
      </Routes>
    </>
  );
}

export default App;
