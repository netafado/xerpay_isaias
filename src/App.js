import React from "react";
import SearchPage from "./pages/search/search";
import Result from "./pages/result";
import Page404 from "./pages/404";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App xerpayTest">
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route exact path="/result/:user">
            <Result />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
