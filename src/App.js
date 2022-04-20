import logo from "./logo.svg";
import "./App.css";
import Base from "./Layout/Base/Base";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div className="App">
      
      <Base>
        <Home></Home>
      </Base>
    </div>
  );
}

export default App;
