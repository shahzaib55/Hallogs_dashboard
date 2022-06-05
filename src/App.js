
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Anouncement  from './components/Anouncement';
import Home from './components/Home';
import Login from './components/Login';
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar /> 

         <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Anouncement" component={Anouncement} />
        </Switch>
        
      </div>
    //  </Router>
  );
}

export default App;
