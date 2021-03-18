import React from 'react';
import '../Stylesheets/About.css';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Profile from "../profile.jpg";

class Aboutsection extends React.Component{
  render(){
    return( 
      <div className="aboutsection">
        <div className="self_intro">
          <Card className="self_intro_card" data-aos="fade-right">
            <Card.Img className="profile_img" variant="top" src={Profile} />
            <Card.Body>
              <Card.Title className="card_profile_title">Who's this guy?</Card.Title>
              <Card.Text className="card_profile_text">
               I am a full-stack developer. I have a serieous passion for UI effects, animation and creating intiative, dyamnamic user experiences.<br/>
               <Link to="Contact" className="card_profile_link">Let's make something special.</Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="progessbars_container">
          <div className="progressbars" data-aos="fade-left">
            <div className="progress_bar"> <div className="progress_text">HTML</div><span className="progress_span html">90%</span> </div><br/><br/>
            <div className="progress_bar"> <div className="progress_text">CSS</div><span className="progress_span css">80%</span> </div><br/><br/>
            <div className="progress_bar"> <div className="progress_text">Javascript</div><span className="progress_span javascript">70%</span> </div><br/><br/>
            <div className="progress_bar"> <div className="progress_text">Bootstrap</div><span className="progress_span bootstrap">90%</span> </div><br/><br/>
            <div className="progress_bar"> <div className="progress_text">React Js</div><span className="progress_span react_js">80%</span> </div><br/><br/>
            <div className="progress_bar"> <div className="progress_text">React Native</div><span className="progress_span react_native">70%</span> </div><br/><br/>
            <div className="progress_bar"> <div className="progress_text">Node Js</div><span className="progress_span node_js">80%</span> </div><br/><br/>
            <div className="progress_bar"> <div className="progress_text">Mongo DB</div><span className="progress_span mongo_db">60%</span> </div><br/><br/>
            <div className="progress_bar"> <div className="progress_text">Photoshop</div><span className="progress_span photoshop">50%</span> </div><br/>
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutsection;