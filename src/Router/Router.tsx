import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "../Layouts/Index";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
