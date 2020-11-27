import React from "react";
import Slider from "react-slick";
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Image1 from "./Images/image1.webp";
import Image2 from "./Images/image2.webp";
import Image3 from "./Images/Image3.webp";
import Image4 from "./Images/image4.webp";

export const BackgroundDiv = styled.div`
  background-image: url(${(props) => props.url});
`;
export default function TopSlider() {
  const settings = {
    customPaging: function (i) {
      return (
        <Link to="/">
          <img src={Image1} alt="image1" />
        </Link>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2>Custom Paging</h2>
      <Slider {...settings}>
        <div>
          <img src={Image1} alt="image1" />
        </div>
        <div>
          <img src={Image2} alt="image2" />
        </div>
        <div>
          <img src={Image3} alt="image3" />
        </div>
        <div>
          <img src={Image4} alt="image4" />
        </div>
      </Slider>
    </div>
  );
}
