const Toggle = ({ showCompleted, setShowCompleted }) => {
  return (
    <button onClick={() => setShowCompleted(!showCompleted)}>
      {showCompleted ? "Hide Completed" : "Show Completed"}
    </button>
  );
};

export default Toggle;
