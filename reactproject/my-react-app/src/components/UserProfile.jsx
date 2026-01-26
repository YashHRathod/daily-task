import { useDispatch, useSelector } from "react-redux";
import { fetchRequested } from "../features/user/userSlice";
import React from "react";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.user);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Profile</h2>

      <button onClick={() => dispatch(fetchRequested())}>Fetch User</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
