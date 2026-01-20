const TaskList = ({ tasks, showCompleted, toggleTask }) => {
  return (
    <ul>
      {tasks
        .filter((task) => showCompleted || !task.completed)
        .map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
