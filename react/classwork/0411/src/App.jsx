import Button from "./components/Button";
function App() {
  const menuList = [
    { id: 1, title: "Home", bgColor: "red" },
    { id: 2, title: "About", bgColor: "green" },
    { id: 3, title: "Price", bgColor: "yellow " },
    { id: 4, title: "Contacts", bgColor: "blue" },
  ];
  return (
    <ul>
      {menuList.map((menuItem) => {
        return (
          <Button
            key={menuItem.id}
            title={menuItem.title}
            bgColor={menuItem.bgColor}
          />
        );
      })}
    </ul>
  );
}
export default App;
