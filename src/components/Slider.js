import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Slider.css'
import data from '../data/data.json'




const Slider = ({ start , end}) => {
  return (

    

    // <div className="slider">
    <Carousel fade className="Slider">

            {
                start.map(images => (
                  <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={images}
                    alt="First slide"
                  />
                </Carousel.Item>
                ))
            }

           




      {/* {start.map((item) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item}
            alt="First slide"
          />
        </Carousel.Item>
      ))} */}

    </Carousel>
    // </div>
  )
  
      
}

export default Slider
