import React from 'react';
//import about from '../img/about.jpg';
import haz from '../img/haz.jpg'
import hazem from '../cvv/hazem.pdf'



const ImageSection = ()  => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={haz} alt=""/>
            </div>
            <div className="about-info">
                <h4>Hello I'm<span> Hazem Hadj Mabrouk</span></h4>
                <p className="about-text">
                    A freelance Front End Developer based in Tunisia,i specialise in creating interactive and responsive interfaces using
                    react,Also specialised in mobile development using react native(Expo).
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p >Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Hazem Hadj Mabrouk</p>
                        <p>: 22</p>
                        <p>: Tunisian</p>
                        <p>: Arabic ,French ,English</p>
                        <p>: Moknine , Monastir</p>
                        <p>: Tunisia</p>
                    </div>
                </div>
                <a href={hazem} download><button className="btn">
                    Download Cv
                    </button>
                    </a>
            </div>
        </div>
    )
}

export default ImageSection;