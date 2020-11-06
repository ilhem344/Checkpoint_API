import React from "react";
import "./App.css";
import UserList from "./UserList/UserList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./Details";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path={`/`}>
              {" "}
              <UserList />
            </Route>
            <Route
              path={`/:id`}
              render={(props) => <Details {...props} />}
            ></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
