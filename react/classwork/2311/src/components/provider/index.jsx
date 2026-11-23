import GlobalContext from "../../context";
import { useState } from "react";

function CustomProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <GlobalContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default CustomProvider;
