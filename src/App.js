import logo from './logo.svg';
import "./App.css"
import {
    Switch,
    Route
} from "react-router-dom";
import React, {useState} from "react";
import Home from "./containers/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Login from "./containers/login/login"
import SignUp from './containers/signUp/signUp';
import { AuthContext } from './hooks/useAuth';
import ProfileRed from './containers/profileRed/profileRed';


function App() {
    const existingToken = JSON.parse(localStorage.getItem("token"))
    const [authToken, setAuthToken] = useState(existingToken)

    const setToken = (data) => {
        if (data === ""){
            localStorage.removeItem("token")
            setAuthToken(null);
        }else{
            localStorage.setItem("token", JSON.stringify(data));
            setAuthToken(data);
        }
        

    };

    return (
        <AuthContext.Provider value={{authToken, setAuthToken: setToken}}>
            <div className="app">
                <Header/>
                <Switch>
                    <Route path="/"  exact>
                        {/* <Login/> */}
                        <Home />
                        {/* <SignUp /> */}
                        {/* <Profile /> */}
                        {/* <AdminProfile /> */}
                    </Route>
                    <Route path="/login" exact>
                        <Login/>
                    </Route>
                    <Route path="/signup" exact>
                        <SignUp/>
                    </Route>
                    <Route path="/profile" exact>
                        <ProfileRed />
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
