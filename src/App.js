import "./App.css";
import Activities from "./component/Activities/Activities";
import Header from "./component/Header/Header";
import Question from "./component/Question/Question";
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
      <Question></Question>
    </div>
  );
}

export default App;
