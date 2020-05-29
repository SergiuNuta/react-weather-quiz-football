import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import Weather from "../component/Weather/Weather";
import Quiz from "../component/Quiz/Quiz";
import Football from "../component/Football/Football";

const NotFound = () => (<h1>Not found</h1>);

export default class Routes extends Component {
    render() {
        return(
            <Router>
                <Redirect noThrow from="/" to="weather" />
                <Weather path="weather" />
                <Quiz path="quiz" />
                <Football path="football" />
                <NotFound default />
            </Router>
        )
    }
}