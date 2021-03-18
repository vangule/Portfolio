import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import '../Stylesheets/About.css';
import Cards from '../Components/Cards';
import Aboutsection from '../Components/Aboutsection';
import Cdata from '../JSONs/Cdata';

class About extends React.Component{
  render(){
    return(
      <Jumbotron className="about_page">
        <h2 className="about_page_title" data-aos="fade-left">About</h2>
        <div className="about_underline" data-aos="fade-left"></div>
           {Cdata.map((val) => {
             return(
              <Cards 
              key={val.id}
              icon={val.icon}
              title={val.title}
              description={val.description}
              />
            );
           })}
        <Aboutsection />
      </Jumbotron>
    );
  }
}

export default About;