import logo from './logo.svg';
import "./App.css"
import {
    BrowserRouter as Router,
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
            <switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
            </switch>
            <Footer/>
        </div>
    );
}

export default App;
