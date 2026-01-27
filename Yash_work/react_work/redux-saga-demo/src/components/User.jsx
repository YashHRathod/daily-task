import { fetchUserRequested } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostRequested } from "../features/posts/postSlice";
function User() {
     const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);
  const posts = useSelector((state) => state.post);
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
         <h2>Posts</h2>
      <button onClick={() => dispatch(fetchPostRequested())}>
        Fetch Posts
      </button>
      {posts.loading && <p>Loading posts...</p>}
      {posts.data  && <ul>
      {posts.data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
      </ul>}
    </div>
  )
}

export default User
