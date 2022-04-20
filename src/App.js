import logo from "./logo.svg";
import "./App.css";
import Base from "./Layout/Base/Base";
// .............Pages ..............
import Home from "./Pages/Home/Home";
import NFT from "./Pages/NFT/NFT";
// .............Pages ..............End

function App() {
  return (
    <div className="App">
      <Base>
        <Home></Home>
        <NFT></NFT>
      </Base>
    </div>
  );
}

export default App;
