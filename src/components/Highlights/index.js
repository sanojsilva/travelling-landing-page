import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import one from '../../resources/images/highlights/one.jpeg';
import two from '../../resources/images/highlights/two.jpeg';
import three from '../../resources/images/highlights/three.jpeg';
import four from '../../resources/images/highlights/four.jpeg';
import five from '../../resources/images/highlights/five.jpeg';
import six from '../../resources/images/highlights/six.jpeg';
import seven from '../../resources/images/highlights/seven.jpeg';
import eight from '../../resources/images/highlights/eight.jpeg';

const HighlightsWrapper = styled.div`
    background-color: white;
    padding: 70px;
    position: relative;
`;

const ImageWrapper = styled.div`
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, 0.5)), url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 50vh;
    margin: 0px 10px;
`;

const ImageText = styled.div`
    text-align: center; 
    font-family: Roboto;
    font-weight: bold;

`;

const HighlightsTitle = styled.h3`
    font-family: Roboto;

`;

const Highlights = (props) => {

    const images = [
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight
    ];

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500,
      autoplay: true
    };

    return (
        <HighlightsWrapper>
            <HighlightsTitle>
                Highlights
            </HighlightsTitle>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div>
                        <ImageWrapper image={image} key={index} ></ImageWrapper>
                        <ImageText>
                            Elit commodi facilis commodi iusto ipsa debitis? Officiis magnam voluptatibus nam quod sit Id vero ducimus veniam recusandae beatae Aliquam at dolor officiis obcaecati asperiores Nostrum obcaecati ut rerum voluptatum
                        </ImageText>
                    </div>
                ))}
            </Slider>
                
        </HighlightsWrapper>
    );
}

export default Highlights;
