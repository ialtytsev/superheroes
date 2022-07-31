import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import HeroDetail from "./components/HeroDetail/HeroDetail";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Container maxWidth="xl">
          <Navbar />
          <Switch>
            <Route path="/" exact component={() => <Redirect to="/heroes" />} />
            <Route path="/heroes" exact component={Home} />
            <Route path="/heroes/:id" component={HeroDetail} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
