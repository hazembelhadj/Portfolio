import { faFacebook,faInstagram,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import portfolio from '../img/portfolio.png';
import Particles from 'react-particles-js';

//import Particle from '../components/Particle'
//import { Link } from 'react-router-dom';


const Home = () => {
    return (  
        
    <div className="backgroun-img">
         <Particles className = "p-particles-js"
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
    
   
             
        <div className="HomePage">
       

          
          <h1 className="gero-text">
              Hi i am <span>Hazem</span>
          </h1>
          <p className="h-subs-text">
              dskvosdivknDINSOIVNIOSDNOVSNDDDDVPs
          </p>
          
         
          <div className="icons">
          <a href="https://www.instagram.com/hazem.belhadj/?hl=fr" className="icon-holder" target='blank'>
               <FontAwesomeIcon icon={faInstagram}  className="icon yt"/>
          </a>  

          </div>
          <div className="icons">
          <a href="https://www.facebook.com/hazem.belhadj.9?__cft__[0]=AZVpdp9K5bW1bg7W3OKmm1WUve8JVDKMVxNetq7VvR-9ahfKbbf_uY-McBeLcRiOAOKF8v8XCj29SUpyW29waqg_N0jD7O9029zdkb47nUSOKv3DpWS__LO1sdhIhHlKsj6yBANKA3o-J1PVRqxHgoWY-GM1ZYg2H4ajNgU4F5Ceng&__tn__=-]K-R" className="icon-holder" target='blank'>
               <FontAwesomeIcon icon={faLinkedinIn}  className="icon li"/>
          </a>  
          

          </div>
          <div className="icons">
          <a href="https://www.facebook.com/hazem.belhadj.9?__cft__[0]=AZVpdp9K5bW1bg7W3OKmm1WUve8JVDKMVxNetq7VvR-9ahfKbbf_uY-McBeLcRiOAOKF8v8XCj29SUpyW29waqg_N0jD7O9029zdkb47nUSOKv3DpWS__LO1sdhIhHlKsj6yBANKA3o-J1PVRqxHgoWY-GM1ZYg2H4ajNgU4F5Ceng&__tn__=-]K-R" className="icon-holder" target='blank'>
               <FontAwesomeIcon icon={faFacebook}  className="icon fb"/>
          </a>  

          </div>
          
        </div>
    </div>
        

         

  

    );
}
 
export default Home;
 
  
