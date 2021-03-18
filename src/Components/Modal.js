import React,{useState} from 'react';
import {Modal, Carousel} from 'react-bootstrap';
import '../Stylesheets/Modal.css';

function Example(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      data-aos="zoom-out-in"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease-in-cubic"
    >
      <Modal.Header>
      <Carousel activeIndex={index} onSelect={handleSelect}>       
         <Carousel.Item>
         <img src={props.imgsrc} alt="mypic" className="img_modal" /> 
         </Carousel.Item>

         <Carousel.Item>
         <img src={props.imgsrc} alt="mypic" className="img_modal" /> 
         </Carousel.Item>

         <Carousel.Item>
         <img src={props.imgsrc} alt="mypic" className="img_modal" /> 
         </Carousel.Item>
    </Carousel>
      </Modal.Header>
      <Modal.Body>
  <h4 className="title_modal">{props.title}</h4>
  <h3 className="subtitle_modal">{props.subtitle}</h3><hr/>
        <h5 className="description_modal">
          {props.detail}
        </h5>
      </Modal.Body >
      <Modal.Footer>
       <h2 onClick={props.onHide} className="close_modal"> &times;</h2>
      </Modal.Footer>
    </Modal>
  );
}

export default Example;