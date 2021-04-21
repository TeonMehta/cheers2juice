import React from 'react';
import './Home.scss';
import Carousel from 'react-bootstrap/Carousel'
import { Container, Image } from "react-bootstrap";
const Home = () => {
    return (
        <div className="home">
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/QC62yhf/body-boosters-min.jpg" alt="body-booster"
                        alt="First slide"
                    />
                </Carousel.Item>
            <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/7gLM850/chiller-min.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
            
         
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/qspYvph/khemistryy-min.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/6ZXB5T6/takee-control-min.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Cwhzkzn/sweet-tooth-min.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/9tBQmkf/tropical-blisss-min.jpg"
                        alt="First slide"
                    />
                </Carousel.Item> 
            </Carousel>
        </div>
    );
};

export default Home;
