import logo from './logo.svg';
import Fountain from './script/emojiPop.tsx';
import './App.css';

function App() {

  return (
    <div className="App" onClick={() => new Fountain()}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Just click wherever you like
        </p>
      </header>
    </div>
  );
}

export default App;
