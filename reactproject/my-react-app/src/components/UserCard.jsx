const UserCard = ({ name, age }) => {
  return (
    <div
      style={{
        background: "#b51616",
        padding: "15px",
        margin: "10px auto",
        borderRadius: "8px",
        width: "300px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
