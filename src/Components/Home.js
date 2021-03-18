import React,{useState} from "react";
import { Container, Button} from "react-bootstrap";
import '../Stylesheets/App.css';
import {Link} from 'react-router-dom';

const Home = () =>{
 const rightArrow = "fa fa-arrow-right";
 const downArrow = "fa fa-arrow-down";

  const [mouseover, setMouseOver] = useState(rightArrow);

    const mouseOver = () =>{
      setMouseOver(downArrow);
    };

    const mouseLeave =() => {
      setMouseOver(rightArrow);
    }

     return(
         <Container fluid className="landing_page">
           <div className="short_intro">
             <h1>Hello I'm <span> Chandrakant Vangule</span>.<br/>
                 I'm a full-stack web developer.   
             </h1>
           </div>
           <div className="view_my_work_btn">
             <Button onMouseEnter={mouseOver} onMouseLeave={mouseLeave} variant="outline-primary"><Link to="About">View my work</Link> &nbsp;<i class={mouseover} aria-hidden="true"></i></Button> <br/>
           </div>
         </Container>
     );
 }
 
export default Home;