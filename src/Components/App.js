import React from 'react';
import '../Stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import About from "../Components/About";
import Project from '../Components/Project';
import Blog from '../Components/Blog';
import Contact from '../Components/Contact';

function App() {
  return (
    <Router>
    <div className="App">
     <Route path="/" exact component={Home}/>
     <Navbar />
     <About/>
     <Project/>
     <Blog/>
     <Contact/>
     {/* <Switch>
     <Route path="/about" component={About} />
     <Route path="/project" component={Project} />
     <Route path="/blog" component={Blog} />
     <Route path="/contact" component={Contact} />
     </Switch>     */}
     </div>
     </Router> 
  );
}

export default App;
