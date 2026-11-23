import CustomProvider from "./components/provider";
import Counter from "./components/counter";

function App() {
  return (
    <CustomProvider>
      <Counter />
    </CustomProvider>
  );
}

export default App;
