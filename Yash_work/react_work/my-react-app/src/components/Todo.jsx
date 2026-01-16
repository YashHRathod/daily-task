import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "../App.css"
function Todo() {
  const [todos, setTodos] = useState([]);
  const [bool,setbool]=useState(true);
  const heading = ()=>{
    setbool(!bool)
  }
  const [text, setText] = useState("");
  const [counter,setcouter]=useState(0);

  function addTodo() {
    setTodos(prev => [...prev, {
        id:uuidv4(),
        text:text
    }]);
    setText("");
    increament()
    
  }
  const increament = ()=>{
    setcouter(counter+1)
  }

  return (
    <>
        {bool && <h1>Hello React</h1>}
        <button onClick={heading}>{bool?"show":"hide"}</button>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={(e)=>{
            if(e.key=="Enter"){
                addTodo();
            }
        }
        }
      />
      <button onClick={addTodo}  >Add</button>
      

        <ul>
            {todos.length>0 && todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
      {todos.length>0 && <button onClick={increament}>{counter}</button>}
    </>
  );
}

export default Todo;
