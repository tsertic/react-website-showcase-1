import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact />
      </Switch>
    </>
  );
}

export default App;
