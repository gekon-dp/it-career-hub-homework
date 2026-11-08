function FruitsList() {
  const fruits = ["apple", "abanana", "orange", "kiwi"];

  return (
    <ul>
      {fruits.map((fruit) => {
        return <li>{fruit}</li>;
      })}
    </ul>
  );
}

export default FruitsList;
