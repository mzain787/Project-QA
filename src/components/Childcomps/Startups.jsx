'use client'
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home/Home.css";
import startup1 from "../../assets/images/startup1.svg";
import startup2 from "../../assets/images/startup2.svg";
import startup3 from "../../assets/images/startup3.svg";
import startup4 from "../../assets/images/startup4.svg";
import startup6 from "../../assets/images/startup6.svg";
import Image from 'next/image';
import Slider from "react-slick";

const Startups = () => {
  const images = [startup1, startup2, startup3, startup4, startup6];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section className="startups p-0 pb-10">
      <div className="hero-startups">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Image src={image} alt={`startup-img-${index}`} className="w-full" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Startups;
