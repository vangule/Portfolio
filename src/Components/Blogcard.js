import React from 'react';
import '../Stylesheets/Blog.css';

function Blogcard(props){
  return(
    <>
    <div className="card_blog" data-aos="fade-right">
      <img src={props.imgsrc} className="img_card" alt="..."/>
      <div className="card-body card_body">
        <h5 className="card-title blog_card_title">{props.title}</h5>
        <div className="date">{props.date}</div>
        <div className="bar"></div>
        <p className="card-text blog_card_text">
          {props.description}
        </p>
      </div>
    </div>
  </>
  );
}

export default Blogcard;