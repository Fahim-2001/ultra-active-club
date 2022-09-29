import "./App.css";
import Activities from "./component/Activities/Activities";
import Header from "./component/Header/Header";
import PogramDetails from "./component/ProgramDetails/PogramDetails";
import SelfInfo from "./component/SelfInfo/SelfInfo";

function App() {
  return (
    <div className="app">
      <div>
        <Header></Header>
        <Activities></Activities>
      </div>
      <div>
        <SelfInfo></SelfInfo>
        <PogramDetails></PogramDetails>
      </div>
    </div>
  );
}

export default App;
