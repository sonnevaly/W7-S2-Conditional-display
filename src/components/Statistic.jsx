function Statistic({ courseResults }) {
  if (courseResults.length === 0) return null;

  const scores = courseResults.map((student) => student.score);
  const average = (
    scores.reduce((sum, score) => sum + score, 0) / scores.length
  ).toFixed(1);
  const min = Math.min(...scores);
  const max = Math.max(...scores);

  return (
    <div className="statistic">
      <div>
        <p>AVERAGE</p>
        <p>{average}</p>
      </div>
      <div>
        <p>MIN</p>
        <p>{min}</p>
      </div>
      <div>
        <p>MAX</p>
        <p>{max}</p>
      </div>
    </div>
  );
}

export default Statistic;
