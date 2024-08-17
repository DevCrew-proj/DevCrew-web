import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderBox = styled.div`
  width: 100%;
  height: 100%;
  &:focus {
    outline: none;
  }
`;

const ImageBox = styled.img`
  width: 100%;
  height: auto;
  display: block;
  padding: 0 20px;
  width: 782px;
  height: 439px;
  box-sizing: border-box;
  background-size: cover;
  outline: none;
  &:active {
    outline: none;
  }
`;

const ImageSlider = ({ images }) => {
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  console.log(images);

  return (
    <>
      {images.length === 1 ? (
        <ImageBox style={{ margin: "0 auto" }} src={images[0]} alt='image1' />
      ) : (
        <Slider {...settings}>
          {images.map((image, index) => (
            <SliderBox key={index}>
              <ImageBox src={image} alt={`image ${index}`} />
            </SliderBox>
          ))}
        </Slider>
      )}
    </>
  );
};

export default ImageSlider;
