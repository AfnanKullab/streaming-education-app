import React from "react";
import Slider from "react-slick";
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import image1 from "./Images/image1.webp";
import Image2 from "./Images/image2.webp";
import image3 from "./Images/Image3.webp";
import image4 from "./Images/image4.webp";

export const BackgroundDiv = styled.div`
  background-image: url(${(props) => props.url});
`;
export default function TopSlider() {
  const settings = {
    customPaging: function (i) {
      return (
        <a href="#">
          <BackgroundDiv url={Image1} />
        </a>
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
          <BackgroundDiv url={Image1} />
        </div>
        <div>
          <BackgroundDiv url={Image2} />
        </div>
        <div>
          <BackgroundDiv url={Image3} />
        </div>
        <div>
          <BackgroundDiv url={Image4} />
        </div>
      </Slider>
    </div>
  );
}
