import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementAsync,
  startAutoIncrement,
  stopAutoIncrement,
} from "../features/counter/counterSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Redux-Saga Counter</h2>

      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <br /><br />

      <button onClick={() => dispatch(incrementAsync())}>
        Increment after 1s
      </button>

      <br /><br />

     
      <button onClick={() => dispatch(startAutoIncrement())}>
        Start Auto Increment
      </button>

      <button onClick={() => dispatch(stopAutoIncrement())}>
        Stop Auto Increment
      </button>
    </div>
  );
}
