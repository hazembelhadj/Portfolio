import React from 'react'
import Contact from '../components/Contact';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../components/Title';
import Form from '../components/Form';

const  ContactPage = () => {
   // const [submitted,isSubmitted] = useState (false)
    return (
        <div className = "Contact">
            <div className="title">
                <Title title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                <iframe  title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.004699980518!2d10.897849914894266!3d35.627610640519016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13021787a0a7f359%3A0xfcf18e3dc870e79!2sSidi%20Bousaid%20-%20restaurant!5e0!3m2!1sfr!2stn!4v1625233732597!5m2!1sfr!2stn" width="600" height="450" style={{border:0}} allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>

                </div>
                <div className="contact-sect">
                    <Contact icon={phone} text1={'+216 27650857'}  title={'Phone'}/>
                    <Contact icon={email} text1={'hazem.belhadj222@gmail.com'}  title={'Email'}/>
                    <Contact icon={location} text1={'Moknine,Monastir'} text2={'United Kingdom'} title={'Address'}/>
                </div>
                <Form />
            </div>
        </div>
    )
}

export default ContactPage;