import './App.css';
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Sobremi from "./pages/Sobremi/Sobremi"
import React from 'react';


function App() {
  return (
    <div className="App">
     <Router basename={process.env.PUBLIC_URL}>
     <GlobalStyle/>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/Sobremi" exact component={Sobremi}/>
       
     </Switch>
     </Router>
    </div>
  );
}

export default App;

