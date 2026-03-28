import WorkflowText from "./components/WorkflowText";
import WorkflowImage from "./components/WorkflowImage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Pear Media AI Prototype</h1>

      <div className="container">
        <WorkflowText />
        <WorkflowImage />
      </div>
    </div>
  );
}

export default App