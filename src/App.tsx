import logo from "./logo.svg";
import "./App.scss";
import { Sample } from "./types";

function App() {
  const user: Sample = {
    name: "me",
    age: 21,
  };
  console.log(user);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
