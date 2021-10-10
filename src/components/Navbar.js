import React  from 'react';
import { NavLink } from 'react-router-dom';
import hazem from '../img/hazem.png'
const Navbar = () => {
    return (  
       <div className="NavBar">
           <nav className="nav">
             <div className="profile">
              <img src={hazem} alt="" /> 
             </div>  
             <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active">
                       Home
                    </NavLink>

                </li>
                <li className="nav-item">
                    <NavLink to="/about" exact activeClassName="active">
                       About
                    </NavLink>

                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" exact activeClassName="active">
                       portfolios
                    </NavLink>

                </li>
                <li className="nav-item">
                    <NavLink to="/blogs" exact activeClassName="active">
                       blogs
                    </NavLink>

                </li>
                <li className="nav-item">
                    <NavLink to="/contact" exact activeClassName="active">
                       Contact
                    </NavLink>

                </li>
             </ul>
            <footer className="footer">
                <p>
                    @2021 Hazem Belhadj
                </p>

            </footer>
            </nav>
            
       </div>




    );
}
 
export default Navbar;