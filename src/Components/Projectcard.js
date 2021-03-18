import React, {useState} from "react";
import {Button} from 'react-bootstrap';
import '../Stylesheets/Projectcard.css'
import Modal from '../Components/Modal';
import Modaldata from "../JSONs/Modaldata";

function Projectcard(props){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return(
    <> 
    <div className="project_gallary">
      <div className="container" data-aos="fade-up">
      <img src={props.imgsrc} 
      alt="mypic" 
      className="card_img"/>
      <div className="middle">
        <h2>{props.title}</h2>
        <h3>{props.lang}</h3>
        <Button onClick={() => setModalIsOpen(true)} className="learn_more_btn">Learn More</Button >
      </div>
      </div>

    </div>
    {Modaldata.map((val) => {
      return(
        <Modal 
        show={modalIsOpen}
        onHide={() => setModalIsOpen(false)}
        key = {val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        subtitle={val.subtitle}
        detail={val.detail}
       />
      );
    })}
</>
  );
}

export default Projectcard;