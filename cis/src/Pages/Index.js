import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import '../Css/styling.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CrimeInvestigation from "./CrimeInvestigation";
const Index = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/Login');
    }

    const handleSignupClick = () => {
        navigate('/signup');
    }

    const slides = [
        {
            id: 1,
            welcomeText: 'Welcome to Online Crime Investigation System',
            heading1: 'Empowering Law Enforcement with Advanced Tools: ',
            heading2: 'From Crime Records to Suspect Identification',
            description1: 'Track and manage crime records efficiently.',
            description2: 'Utilize data analysis to solve cases faster.',
        },
        {
            id: 2,
            welcomeText: 'Online Crime Investigation System',
            heading1: 'Enhance Public Safety with Our Platform: ',
            heading2: 'Why Choose Our System?',
            description1: 'Comprehensive suspect database and tracking.',
            description2: 'Generate detailed reports with ease.',
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div id="root">
            <section className="banner_main">
                <Slider className="custom-slider" {...settings}>
                    {slides.map((slide) => (
                        <div key={slide.id} className={`carousel-item${slide.id}`}>
                            <div className="slide-content">
                                <div className="welcome">
                                    <h4>{slide.welcomeText}</h4>
                                </div>
                                <h2>{slide.heading1}</h2>
                                <h2>{slide.heading2}</h2>
                                <p>{slide.description1}</p>
                                <p>{slide.description2}</p>
                                <div className="gl-buttons">
                                    <Button className="g-button" variant="primary" onClick={handleSignupClick}>
                                        <span>Get Started</span>
                                    </Button>
                                    <Button className="l-button" variant="primary" onClick={handleLoginClick}>
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
            <CrimeInvestigation/>
        </div>
    );
}

export default Index;
