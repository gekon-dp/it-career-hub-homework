// Задание 10

// Внутри компонента "Main" добавьте компонент "Text", компонент "Lists", несколько экземпляров компонента "Pictures" и компонент.

import Text from "./Text";
import Lists from "./Lists";
import Pictures from "./Pictures";
import LinkButton from "./LinkButton";

function Main() {
  return (
    <div>
      <Text></Text>
      <Lists></Lists>
      <Pictures></Pictures>
      <Pictures></Pictures>
      <LinkButton></LinkButton>
    </div>
  );
}

export default Main;
