// Задание 4
// Добавьте компоненты "HeaderTitle" и "HeaderLogo", внутрь компонента Header (Не забудьте, что для этого каждый
// компонент необходимо сначала экспортировать, а затем импортировать)

import HeaderLogo from "./HeaderLogo";
import HeaderTitle from "./HeaderTitle";

// Задание 1
// Создайте компонент "Header", который будет хедером вашего сайта,
// пока что оставьте внутри один пустой <div>.

function Header() {
  return (
    <div>
      <HeaderLogo></HeaderLogo>
      <HeaderTitle></HeaderTitle>
    </div>
  );
}

export default Header;
