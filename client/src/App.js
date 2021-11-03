import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChairThree from "./ChairThree";
import Bed from "./Bed";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <ChairThree />
      </Router>
      {/* <Bed /> */}
    </>
  );
}

export default App;
