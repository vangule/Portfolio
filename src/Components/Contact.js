import React,{useState} from 'react';
import {Container} from 'react-bootstrap';
import '../Stylesheets/Contact.css';
import Footer from '../Components/Footer';

const Contact = () =>{
  const [name, setName] = useState({
    fullname: "",
    email: "",
    message: ""
  });

  const InputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
   const { name, value } = event.target;

  setName((preValue) => {
    console.log(preValue);
   return{
    ...preValue,
    [name]: value,
   };
  });

};

  const onSubmits = (event) => {
    event.preventDefault();
    alert("Form submitted successfully!!");
  };

  return(
    <>
    <Container fluid id="contact">
     <h2 className="contact_page_title" data-aos="fade-right">Contact</h2>
     <div className="contact_title_underline" data-aos="fade-right"></div>
     <div className="collabrate" data-aos="fade-left">Have question or want to work together?</div>
     <div className="contact_container" data-aos="zoom-in">
      <form onSubmit={onSubmits}>
        <h1>{name.fullname}</h1>
        <input 
          type="text"
          placeholder="Name"
          name="fullname"
          onChange={InputEvent}
          value={name.fullname}
          required
        /><br/>

        <input 
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={InputEvent}
          value={name.email}
          required
        /><br/>

        <textarea 
          type="text"
          placeholder="Your Message"
          name="message"
          onChange={InputEvent}
          value={name.message}
        /><br/><br/>

        <button type="submit" className="submit_btn">Submit</button>
      </form>
      </div>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;