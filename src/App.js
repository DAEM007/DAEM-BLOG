import NavBar from './components/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Create from './pages/Create';
import BlogDetails from './pages/BlogDetails';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/create' component={Create}/>
            <Route path='/blogs/:id' component={BlogDetails}/>
            <Route path='/*' component={NotFound}/>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}


export default App;


