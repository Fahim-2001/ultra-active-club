import "./App.css";
import Activities from "./component/Activities/Activities";
import Header from "./component/Header/Header";
import SelfInfo from "./component/SelfInfo/SelfInfo";

function App() {
  return (
    <div>
      <div className="app">
        <Header></Header>
        <SelfInfo></SelfInfo>
      </div>
      <div>
        <Activities></Activities>
      </div>
    </div>
  );
}

export default App;
