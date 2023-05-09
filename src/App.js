// import Ball from './Ball';
import Lotto from "./Lotto.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <Lotto />
      <Lotto title='hi' maxNum={20} maxBall={ 4} />
    </div>
  );
}

export default App;
