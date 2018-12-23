import React from 'react';
import MidSection from './MidSection';
import styled from 'styled-components';
//import background_image from '../../resources/images/background_image.jpeg';
import slide_one from '../../resources/images/slide_one.jpeg';
import slide_two from '../../resources/images/slide_two.jpeg';
import slide_three from '../../resources/images/slide_three.jpeg';
import Slider from 'react-slick';


//const HeroWrapper = styled.div`
    //background-image: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, 0.5)), url(${background_image});
    //background-size: cover;
    //background-position: center;
    //background-repeat: no-repeat;
    //height: 100vh;
    //width: 100vw;
    //margin: 0;
    //padding: 0;
    //box-shadow: border-box;
//`;

const ImageWrapper = styled.div`
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, 0.5)), url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    box-shadow: border-box;
`;

const Hero = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 5000,
        arrows: false
    };

    const images = [
        slide_one,
        slide_two,
        slide_three
    ];

    return (
        <div>
            <MidSection />
            <Slider {...settings}>
                {images.map((image, index) => <ImageWrapper image={image} key={index}></ImageWrapper>)}
            </Slider>
        </div>
    );
}


export default Hero;
