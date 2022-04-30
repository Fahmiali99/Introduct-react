import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.start,
    };
  }

  componentDidMount() {
    this.addInterval = setInterval(() => this.tambah(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval);
  }
  tambah() {
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1,
    }));
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}

function Introduction(props) {
  return (
    <div>
      <Timer start="0" />
      <Timer start="5" />
      <h1>Hallo {props.name}</h1>
      <h1>Age {props.age}</h1>
      <h1>Alamat {props.address}</h1>
    </div>
  );
}

function ClickEvent() {
  function aturClick(e) {
    alert("Berhasil Di Click");
    e.kembaliClick();
  }

  return (
    <a href="#" onClick={aturClick}>
      Select
    </a>
  );
}

class BtnClickON extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkStatus: true,
    };

    this.btnTest = this.btnTest.bind(this);
  }
  btnTest() {
    this.setState((state) => ({
      checkStatus: !state.checkStatus,
    }));
  }

  render() {
    return (
      <button onClick={this.btnTest}>
        {this.state.checkStatus ? "ON" : "OFF"}
      </button>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Introduction name="Fahmi Ali " age="23" address="Malang" />

        <ClickEvent />

        <BtnClickON />
      </header>
    </div>
  );
}

export default App;
