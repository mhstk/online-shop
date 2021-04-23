import logo from './logo.svg';
import "./App.css"
import {
    Switch,
    Route
} from "react-router-dom";
import React from "react";
import Home from "./containers/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
    return (
        <div className="app">
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
