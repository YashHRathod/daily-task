import { fetchUserRequested } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function User() {
     const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);
  return (
    <div>
      <h1>Redux Saga Demo</h1>

      <button onClick={() => dispatch(fetchUserRequested())}>
        Fetch User
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      { data && <><ul>
      {data.map((user) => (
        <li key={user.address}>{user.name}</li>
      ))}
    </ul></>}
    </div>
  )
}

export default User
