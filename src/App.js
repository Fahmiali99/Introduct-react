import "./App.css";
import { Switch, Route } from "react-router-dom";
import MainRender from "./Components/Home/MainRender";
import MainAbout from "./Components/About/MainAbout";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <MainRender />
      </Route>
      <Route exact path="/about">
        <MainAbout />
      </Route>
    </Switch>
  );
}

export default App;
