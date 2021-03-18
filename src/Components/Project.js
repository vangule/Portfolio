import React from 'react';
import {Jumbotron,ButtonGroup,Button} from 'react-bootstrap';
import '../Stylesheets/Project.css';
import Modal from '../Components/Modal';
import Projectcard from '../Components/Projectcard';
import Projectdata from '../JSONs/Projectdata';

const Project = () =>{
    return(
      <Jumbotron id="project">
         <h2 className="page_title" data-aos="fade-right">Projects</h2>
        <div className="underline" data-aos="fade-right"></div>
        <div className="btn_container">
        <ButtonGroup size="lg" className="button_group" aria-label="Basic example">
          <Button active>All</Button>
        </ButtonGroup>
        <ButtonGroup size="lg" className="button_group" aria-label="Basic example">
          <Button>HTML</Button>
        </ButtonGroup>
        <ButtonGroup size="lg" className="button_group" aria-label="Basic example">
          <Button>JAVASCRIPT</Button>
        </ButtonGroup>
        <ButtonGroup size="lg" className="button_group" aria-label="Basic example">
          <Button>REACT-JS</Button>
        </ButtonGroup>
        </div>
        {Projectdata.map((val) => {
          return(
            <Projectcard
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            lang={val.lang}
            />
          );
        })}
        <Modal/>
        <div className="project_empty_div"></div>
      </Jumbotron>       
    );
  }

export default Project;