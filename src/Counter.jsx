import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Método para incrementar el contador
  const setIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p>Count: {count}</p>
      <button onClick={setIncrement}>Increment</button>
    </div>
  );
};

export default Counter;