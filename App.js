import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Route, Link } from "react-router-dom";
import Nav from './Nav';
function App() {
  return(
    <div className="App">
      <Nav/>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Contact" component={Contact} />
     

      
    </div>
  );

  
}

export default App;
