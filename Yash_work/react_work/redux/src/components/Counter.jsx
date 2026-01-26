import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/counterSlice';
import { useState } from 'react';

function Counter() {

  const count = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

 
  const handleAmountChange = (e) => {
    setAmount(e.target.value); 
  };
  const handleAddByAmount = () => {
    dispatch(incrementByAmount(Number(amount) ));
    setAmount('')
  };
  return (
    <>
      <h1>Count: {count}</h1>
     
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>     
      <input 
        type="number" 
        value={amount} 
        onChange={handleAmountChange} 
      />
      <button onClick={handleAddByAmount}>Add Amount</button>
    </>
  );
}

export default Counter;
