import { useReducer } from "react";
import reducer from "./reducer1";

const initialValue = 0;

const ReducerHook = () => {
//   const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
          <button onClick={() => dispatch({ type: "INC" })}>+</button>
          <h1>{count}</h1>
          <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </>
  );

  }
  export default ReducerHook;
