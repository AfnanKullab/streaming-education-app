import React from "react";
import Slider from "react-slick";
import "../../App.css";
//import "~slick-carousel/slick/slick.css";
//import "~slick-carousel/slick/slick-theme.css";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
//import styled from "styled-components";
import Image1 from "../../Images/image1.webp";
import Image2 from "../../Images/image2.webp";
import Image3 from "../../Images/image3.webp";
import Image4 from "../../Images/image4.webp";
// import Image1 from "../../Images/flat-color-icons_google.png";

// export const BackgroundDiv = styled.div`
//   background-image: url(${(props) => props.url});
// `;
const obj = { Image1, Image2, Image3, Image4 };
export default function TopSlider() {
  const settings = {
    customPaging: function (i) {
      return (
        <a href="#1">
          <img
            className={`Image${i + 1}`}
            src={obj[`Image${i + 1}`]}
            alt="image1"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb ",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="a">
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
