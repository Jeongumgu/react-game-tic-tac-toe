import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="플레이어 1" symbol="X"></Player>
          <Player initialName="플레이어 2" symbol="O"></Player>
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
