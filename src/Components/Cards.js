import React from 'react';
import '../Stylesheets/Card.css';

function Cards(props){
    return(
      <>
      <div className="label-wrap">
       <div className="card_about row-gt-sm">
       <div className="card text-center card-hexa" data-aos="fade-right"> 
        <div className="hex-wrap">
             <div className="hexagon">
               <i className={props.icon} style={{height: '90px'}}></i>
             </div>
           </div>
           <div className="card-body">
             <h5 className="card_title bold hex-label">{props.title}</h5>
             <p className="card_text hex-text">{props.description}</p>
           </div>
         </div>
       </div>  
     </div>
     </>
    );
  }

export default Cards;