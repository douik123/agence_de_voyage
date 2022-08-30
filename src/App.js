import './App.css';
import Info from './comp/info.js'
import Navbar from './comp/navbar.js'
import Bas from './comp/bas.js'
import Contact from './comp/contact.js'
import Destination from './comp/destination.js'
import {BrowserRouter as Router ,Route , Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <Info/>
      <Navbar/>
      <Switch>
      <Route exact path="/">
      <Bas/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/destination">
       <Destination/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
