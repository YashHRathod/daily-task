import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"
function Home() {
  const navigate = useNavigate();
  const [textt, settextt] = useState("");

  const navigation = () => {
    navigate(`/form/${textt}`);
  };

  const handleChange = (e) => {
    settextt(e.target.value);
  };

  return (
    <>
    <button onClick={() => toast.error("Toast works!")}>
  Test Toast
</button>
      <h1>Home Page</h1>
      <input 
        type="number" 
        value={textt} 
        onChange={handleChange} 
        placeholder="Enter ID"
      />
     
      <button onClick={navigation}>To id page</button>
    </>
  );
}

export default Home;