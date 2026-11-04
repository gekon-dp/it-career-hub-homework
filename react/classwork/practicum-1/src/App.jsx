// Добавьте в компонент "App" компоненты "Header", "Main" и "Footer". Запустите проект, чтобы увидеть результат.

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
