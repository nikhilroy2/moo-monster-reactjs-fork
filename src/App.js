import logo from "./logo.svg";
import "./App.css";
import Base from "./Layout/Base/Base";
// .............Pages ..............
import Home from "./Pages/Home/Home";
import NFT from "./Pages/NFT/NFT";
import Gameplay from "./Pages/Gameplay/Gameplay";
import GameMode from "./Pages/GameMode/GameMode";
import Tokenomic from "./Pages/Tokenomic/Tokenomic";
// .............Pages ..............End

function App() {
  return (
    <div className="App">
      <Base>
        <Home></Home>
        <NFT></NFT>
        <Gameplay></Gameplay>
        <GameMode></GameMode>
        <Tokenomic></Tokenomic>
      </Base>
    </div>
  );
}

export default App;
