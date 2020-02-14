import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoMatchFoundData from "./pages/NoMatchFound";
import Saved from "./pages/SavedBooks";
import NavBar from "./components/navbar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/saved" component={Saved} />
          <Route path="/" component={Home} />
          {/* <Route component={ NoMatchFoundData } /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
