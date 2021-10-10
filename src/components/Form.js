import React,{useState}  from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
   /* const[email,setEmail] = useState('');
    const[name,setName] = useState('');
    const[subject,setSubject] = useState('');*/
   // const[message,setMessage] = useState('') 
    const handleSubmit  = (e) => {
              console.log(e.target)
        
              e.preventDefault();
              if (e.target == null ) {
                alert ('enter details')
              }
              else {

           emailjs.sendForm('gmail', 'template_xq4vjws', e.target, "user_ftJLTOlGMn39CgvY2q92w")
           
            .then((result) => {
                console.log(result.text);
               alert('submit succeed' );
                
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
           
              
    }
  }
    
    return ( 
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>
     
      <label>Name</label>
      <input
        placeholder="Name"
       // value={name}
        name='name'
      //  onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
       // value={email}
        name='email'
       // onChange={(e) => setEmail(e.target.value)}
      />
      
      <label>Subject</label>
      <input
        placeholder="Subject"
       // value={subject}
        name='subject'
      //  onChange={(e) => setSubject(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
       // value={message}
        name='message'
       // onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        value='send'
        //style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
     );
}
 
export default Form;