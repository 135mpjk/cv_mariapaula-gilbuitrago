import './App.css';
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"
import Rouis from "./pages/Rouis/Rouis"

function App() {
  return (
    <div className="App">
     <Router>
     <GlobalStyle/>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/contact" exact component={Contact}/>
       <Route path="/rouis" exact component={Rouis}/>
     </Switch>
     </Router>
    </div>
  );
}

export default App;

