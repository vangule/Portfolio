import React from 'react';
import Blogdata from '../JSONs/Blogdata';
import Blogcard from '../Components/Blogcard';
import { Jumbotron } from 'react-bootstrap';
import '../Stylesheets/Blog.css';

function Blog(){
  return(
    <>
    <Jumbotron id="blog">
     <h2 className="blog_title" data-aos="fade-right">Blog</h2>
     <div className="blog_underline" data-aos="fade-right"></div>
     {Blogdata.map((val) => {
      return(
        <Blogcard
        key = {val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        date={val.date}
        description={val.description}
       />
      );
    })}
    </Jumbotron>
   </>
  );
}

export default Blog;