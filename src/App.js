
import './App.scss';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfoliosPage from './pages/PortfoliosPage';
import ContactPage from './pages/ContactPage';
import BlogsPage from './pages/BlogsPage';
import React, { useState } from 'react';


import {Switch, Route} from 'react-router-dom'




function App() {
  const [navToggle, setNavToggle] = useState(false);
  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
        <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <Navbar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/About" exact>
              <AboutPage />
            </Route>
            <Route path="/portfolios" exact>
              <PortfoliosPage />
            </Route>
            <Route path="/blogs" exact>
              <BlogsPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
            
          </Switch>

        </div>

        
        
      </div>  
      
     

    </div>
  );
}

export default App;
