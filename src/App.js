import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// All pages/component imports
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Create from './pages/Create';
import BlogDetails from './pages/BlogDetails';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <div className="content">
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/Login' element={ <Login /> }/>
            <Route path='/SignUp' element={ <SignUp /> }/>
            <Route path='/create' element={ <Create /> }/>
            <Route path='/blogs/:id' element={ <BlogDetails /> }/>
            <Route path='/*' element={ <NotFound /> }/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}


export default App;


