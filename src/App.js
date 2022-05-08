import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ApplicationContainer from "./layouts/ApplicationContainer";
import Main from "./components/Main";


const App = () => {
  return (
    <ApplicationContainer>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </ApplicationContainer>
  )
};

export default App;
