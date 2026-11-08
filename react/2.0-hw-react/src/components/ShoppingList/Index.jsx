function ShoppingList({ arr }) {
  return arr.length === 0 ? (
    <p>Список покупок пуст</p>
  ) : (
    <div>
      <h3>Need to buy</h3>
      <ul>
        {arr.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
