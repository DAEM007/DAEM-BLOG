import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/create' component={Create} />
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;


