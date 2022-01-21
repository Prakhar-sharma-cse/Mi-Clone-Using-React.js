import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data/data.json'
import '../styles/banner.css'
const Banner = () => {
    return (
        <div>
            <Carousel fade>
               
                        {
                            data.banner.end.map((item, index) => (
                              <Carousel.Item key={item.image} id="banner" interval={1000} keyboard={true}>
                              <img
                                className="banner"
                                src={item.image}
                                alt="First slide"
                              />
                              <Carousel.Caption className="text">
                                <h3>{item.name}</h3>
                                <span></span>
                                <p>{item.description}</p>
                                <p>{item.source}</p>
                                <u>Read more</u>
                              </Carousel.Caption>
                            </Carousel.Item>
                            ))
                          }
              
                    
                
            </Carousel>
        </div>
    )
}

export default Banner
