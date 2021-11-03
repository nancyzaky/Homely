import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChairThree from "./ChairThree";
import Bed from "./Bed";
import Home from "./Home";
import SignUp from "./SignUp";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Route exact path="/">
          <ChairThree />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Router>
      {/* <Bed /> */}
    </>
  );
}

export default App;
