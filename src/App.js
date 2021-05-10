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
import Login from "./containers/login/login"
import SignUp from './containers/signUp/signUp';
import Profile from './containers/profile/profile';
import AdminProfile from './containers/adminProfile/adminProfile';


function App() {
    return (
        <div className="app">
            <Header/>
            <Switch>
                <Route path="/" exact>
                    {/* <Login/> */}
                    {/* <Home /> */}
                    {/* <SignUp /> */}
                    <Profile />
                    {/* <AdminProfile /> */}
                </Route>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
