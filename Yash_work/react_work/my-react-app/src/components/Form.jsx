import { useContext, useState } from 'react';
import '../App';
import { useNavigate,useParams} from 'react-router-dom';
import UserContext from '../context/UserContext';
function Form() {
  const [email, setEmail] = useState('');
  const {user,setUser}=useContext(UserContext)
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      email,
      password,
      category,
    };
    setUser(email);
    console.log(user)
    console.log("Yash")

    console.log(formData);

    setEmail('');
    setPassword('');
    setCategory('');
    navigate('/counter');
  }

  return (
    <>
      <h1>The user id is{id}</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <input
          type={show ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={() => setShow((prev) => !prev)}>
          Eye
        </button>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select category</option>
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Form;
