import Statistic from "./Statistic";

function Scores({ courseName, courseResults }) {
    return (
      <div className="scores">
        <h1>{courseName}</h1>
  
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {courseResults.map((student, index) => (
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td className={student.score < 50 ? "warning" : ""}>
                  {student.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Statistic courseResults={courseResults} />
      </div>
    );
  }
  
  export default Scores;
  