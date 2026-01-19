import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [textt, settextt] = useState("");

  const navigation = () => {
    // Navigates to the route using the current state value
    navigate(`/form/${textt}`);
  };

  const handleChange = (e) => {
    settextt(e.target.value);
  };

  return (
    <>
      <h1>Home Page</h1>
      <input 
        type="text" 
        value={textt} 
        onChange={handleChange} 
        placeholder="Enter ID"
      />
     
      <button onClick={navigation}>To id page</button>
    </>
  );
}

export default Home;