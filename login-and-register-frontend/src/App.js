import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import React, { Component }  from 'react';

function App() {

  const [ user, setLoginUser] = useState({})

  useEffect(()=>{
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  },[])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user));
    setLoginUser(user);
    //  const detail= localStorage.getItem(JSON.stringify(user))
  }

  return (
    <div className="App">
      <Router>
        <Switch>
        {/* <Route>
            <Dashboard/>
          </Route> */}
          <Route exact path="/">
            {
              user && user._id ? <Homepage updateUser={updateUser} /> : <Login updateUser={updateUser}/>
            }
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser }/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
