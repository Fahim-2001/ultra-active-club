import "./App.css";
import Activities from "./component/Activities/Activities";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="app">
      <div>
        <Header></Header>
        <Activities></Activities>
      </div>
      <div>
        <h1>Hihsab nikash</h1>
      </div>
    </div>
  );
}

export default App;
