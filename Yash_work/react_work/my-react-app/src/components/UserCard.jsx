import "../App.css"
const UserCard = ({ name, age, user }) => {
  return (
    <div className="card">
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Role: {user.role}</h2>
    </div>

  );
};

export default UserCard;
