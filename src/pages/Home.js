import React from 'react';
import './Home.scss';
import Carousel from 'react-bootstrap/Carousel'
import { Container, Image } from "react-bootstrap";
const Home = () => {
    return (
        <div className="home">
            <Carousel fade={true}>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/QC62yhf/body-boosters-min.jpg" alt="body-booster"
                        alt="Body Booster"
                    />
                </Carousel.Item>
            <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/7gLM850/chiller-min.jpg"
                        alt="The Chiller"
                    />
                </Carousel.Item>
            
         
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/qspYvph/khemistryy-min.jpg"
                        alt="The Khemsitry"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/GnWHJSB/eclipsee-min.jpg"
                        alt="Eclipse"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/NV9TXFB/lemmon-twist-min.jpg"
                        alt="Lemon Twist"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/m5Fc7bF/redd-zone-min.jpg"
                        alt="Red Zone"
                    />
                </Carousel.Item> 
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/VmFV9pt/refresheer-min.jpg"
                        alt="Refresher"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Cwhzkzn/sweet-tooth-min.jpg"
                        alt="Sweet Tooth"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/6ZXB5T6/takee-control-min.jpg"
                        alt="Take Control"
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
