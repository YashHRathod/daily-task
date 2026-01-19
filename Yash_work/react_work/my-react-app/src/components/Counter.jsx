import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';

function Counter() {
  console.log('Component rendered');
  const {user}=useContext(UserContext)
  const [counter, setCounter] = useState(0);
  const [bool, setbool] = useState(true);
  const heading = () => {
    setbool(!bool);
  };

  useEffect(() => {
    console.log('Mounted once');
  }, []);

  useEffect(() => {
    console.log('Counter changed:', counter);
  }, [counter]);
  useEffect(() => {
    console.log('heading changed');
    return () => {
      console.log('return in useeffect');
    };
  }, [bool]);
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log('Tick');
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <>
      {bool && <h1>Hello React</h1>}
      <h1>{user}</h1>
      <button onClick={heading}>{bool ? 'show' : 'hide'}</button>:::
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </>
  );
}

export default Counter;
