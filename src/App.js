import logo from "./logo.svg";
import "./App.css";

function Introduction(props) {
  return (
    <div>
      <h1>Hallo {props.name}</h1>
      <h1>Age {props.age}</h1>
      <h1>Alamat {props.address}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Introduction name="Fahmi Ali " age="23" address="Malang" />
      </header>
    </div>
  );
}

export default App;
