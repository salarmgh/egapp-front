import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "../Layouts/Index";
import Login from "../Layouts/Login";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route exact path="/login/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
