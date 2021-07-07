import "./style.css";
import Hold from "./Hold";
import Progress from "./Progress";
import Needs from "./Needs";
import Approved from "./Approved";

function App() {
  return (
    <div className="App">
      <Hold />
      <Progress />
      <Needs />
      <Approved />
    </div>
  );
}

export default App;
