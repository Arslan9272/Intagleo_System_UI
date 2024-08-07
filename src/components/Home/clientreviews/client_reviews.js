import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Reviewsimg from './reviewsimg.png'
import './client_reviews.css'

const Reviews = () => {
  return (
    <div className="main_review">
      <div className="client_reviews">
        <h1 className="client">
          Client Reviews <bold style={{ color: '#5485e7' }}>& feedback</bold>
        </h1>
      </div>
      <div className="review">
      <Carousel prevLabel="" nextLabel="">
          <Carousel.Item>
          <center>
            <img
              className="imgreview"
              src={Reviewsimg}
              alt="Second slide"
            />
            </center>
            <Carousel.Caption>
             
              <p>Intagleo very quicky mastered the technical landscape of our systems. They successfully migrated these to a hosted service without disrupting our naional network of clients and mobile field workers</p>
              <h3>Michael Grant</h3>
              <h6>Chief Technology Officer</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <center>
            <img
              className="imgreview"
              src={Reviewsimg}
              alt="Second slide"
            />
            </center>
           
            <Carousel.Caption>
              
              <p>We have worked with intagleo for over several years. They provide invaluable support for one of our lagacy applications giving us peace of mind that support is there when we need it - and thats why we're talking to them about some of our new technologies.</p>
              <h3>Marloon Cooper</h3>
              <h6>CEO</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <center>
            <img
              className="imgreview"
              src={Reviewsimg}
              alt="Second slide"
            />
            </center>
            
            <Carousel.Caption>
              
              <p>"This business woudld not be possible without the assisstance of the intagleo system, with whom we collaborated for informational system integration. The intagleo team has vast experience integrating infformation systems and managing business processes"</p>
              <h3>Bruce Roger</h3>
              <h6>business Officer</h6>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
