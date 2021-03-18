import React from 'react';
import { Container } from 'react-bootstrap';
import '../Stylesheets/Footer.css';
import ScrollToTop from './ScrollToTop';

const Footer = () =>{
  return(
    <>
    <Container fluid id="footer">
      
      <ScrollToTop />
      <a style={{"textDecoration":"none"}} href="https://www.linkedin.com/in/chandrakant-vangule-648b03197/" target="_blank" rel="noopener noreferrer">
      <div className="icon" data-aos="zoom-in">
       <i class="fa fa-linkedin" aria-hidden="true"></i> 
      </div>
      </a>

      <a style={{"textDecoration":"none"}} href="https://www.facebook.com/chandu.vangule.92/" target="_blank" rel="noopener noreferrer">
      <div className="icon" data-aos="zoom-in">
      <i class="fa fa-facebook" aria-hidden="true"></i>
      </div>
      </a>

      <a style={{"textDecoration":"none"}} href="https://www.instagram.com/charmer_chandu/" target="_blank" rel="noopener noreferrer">
      <div className="icon" data-aos="zoom-in">
     <i class="fa fa-instagram" aria-hidden="true"></i>
      </div>
      </a>

      <a style={{"textDecoration":"none"}} href="https://github.com/vangule" target="_blank" rel="noopener noreferrer">
      <div className="icon" data-aos="zoom-in">
      <i class="fa fa-github" aria-hidden="true"></i>
      </div>
      </a>
      <div className="copywrite">chandrakant vangule <span> &copy;2020 </span> </div>

    </Container>
    </>
  );
}

export default Footer;