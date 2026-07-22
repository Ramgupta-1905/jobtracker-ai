function StatsCard(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>

      <h1>{props.value}</h1>
    </div>
  );
}

export default StatsCard;