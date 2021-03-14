import React from "react";
import MainContainer from "./components/MainContainer";
import UserProvider from "./context/UserContext";
import HistorialProduc from "./components/HistorialProduc";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Switch>
            <Route exact path="/historial" component={HistorialProduc} />
            <Route exact path="/" component={MainContainer} />
          </Switch>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
