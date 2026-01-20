import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        value={input}
        placeholder="Enter a task"
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={() => {
          addTask(input);
          setInput("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
