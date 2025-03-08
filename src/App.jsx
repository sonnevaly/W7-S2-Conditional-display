import Header from "./components/Header";
import Scores from "./components/Scores";
import { HTML_RESULTS, JAVA_RESULTS } from "./data";

function App() {
  return (
    <>
      <Header batchName="Batch 2025" />

      <main className="scores-container">
        <Scores courseName="HTML" courseResults={HTML_RESULTS} />
        <Scores courseName="JAVA" courseResults={JAVA_RESULTS} />
      </main>
    </>
  );
}

export default App;