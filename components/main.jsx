import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Topics from "./Topics";

const Main = () => (<main>
        <Switch>
            <Route
exact
                path="/"
                component={Home} />
            <Route
path="/about"
                component={About} />
            <Route
path="/topics"
                component={Topics} />
        </Switch>
    </main>);


export default Main;
