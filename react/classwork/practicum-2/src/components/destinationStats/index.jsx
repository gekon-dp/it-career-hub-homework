const TIME_LABELS = {
  night: "Ночь",
  dawn: "Рассвет",
  midday: "Полдень",
  dusk: "Закат",
};

function DestinationStats({ stats }) {
  const items = [
    { label: "Популярность", value: Number(stats.popularity).toFixed(1) },
    { label: "Сезон", value: stats.accessibility },
    { label: "Климат", value: stats.climate },
    { label: "Время суток", value: TIME_LABELS[stats.timeofday] ?? stats.timeofday },
  ];

  return (
    <ul className="DestinationStats">
      {items.map((item) => (
        <li key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </li>
      ))}
    </ul>
  );
}

export default DestinationStats;
