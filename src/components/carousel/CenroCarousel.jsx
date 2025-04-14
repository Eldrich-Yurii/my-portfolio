"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import * as React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { IconButton } from "@material-tailwind/react";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Pic1 from "../../assets/projects/neighborsChef/1.png";
import Pic2 from "../../assets/projects/neighborsChef/2.png";
import Pic3 from "../../assets/projects/neighborsChef/3.png";
import Pic4 from "../../assets/projects/neighborsChef/4.png";
import Pic5 from "../../assets/projects/neighborsChef/5.png";
import Pic6 from "../../assets/projects/neighborsChef/6.png";
import Pic7 from "../../assets/projects/neighborsChef/7.png";
import Pic8 from "../../assets/projects/neighborsChef/8.png";
import Pic9 from "../../assets/projects/neighborsChef/9.png";
import Pic10 from "../../assets/projects/neighborsChef/10.png";
import Pic11 from "../../assets/projects/neighborsChef/11.png";
import Pic12 from "../../assets/projects/neighborsChef/12.png";
import Pic13 from "../../assets/projects/neighborsChef/13.png";
import Pic14 from "../../assets/projects/neighborsChef/14.png";
import Pic15 from "../../assets/projects/neighborsChef/15.png";
import Pic16 from "../../assets/projects/neighborsChef/16.png";
import Pic17 from "../../assets/projects/neighborsChef/17.png";
import Pic18 from "../../assets/projects/neighborsChef/18.png";
import Pic19 from "../../assets/projects/neighborsChef/19.png";
import Pic20 from "../../assets/projects/neighborsChef/20.png";
import Pic21 from "../../assets/projects/neighborsChef/21.png";
import Pic22 from "../../assets/projects/neighborsChef/22.png";
import Pic23 from "../../assets/projects/neighborsChef/23.png";
import Pic24 from "../../assets/projects/neighborsChef/24.png";


const slides = [
  {
        img: Pic1,
      },
      {
        img: Pic2,
      },
      {
        img: Pic3,
      },
      {
        img: Pic4,
      },
      {
        img: Pic5,
      },
      {
        img: Pic6,
      },
      {
        img: Pic7,
      },
      {
        img: Pic8,
      },
      {
        img: Pic9,
      },
      {
        img: Pic10,
      },
      {
        img: Pic11,
      },
      {
        img: Pic12,
      },
      {
        img: Pic13,
      },
      {
        img: Pic14,
      },
      {
        img: Pic15,
      },
      {
        img: Pic16,
      },
      {
        img: Pic17,
      },
      {
        img: Pic18,
      },
      {
        img: Pic19,
      },
      {
        img: Pic20,
      },
      {
        img: Pic21,
      },
      {
        img: Pic22,
      },
      {
        img: Pic23,
      },
      {
        img: Pic24,
      },

];

function CustomNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slidePrev()}
        className="dark !absolute left-2 top-1/2 z-10 -translate-y-1/2"
      >
        <TbArrowLeft className="h-7 w-7 -translate-x-0.5 stroke-2 text-gray-600" />
      </IconButton>
      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slideNext()}
        className="dark !absolute right-2 top-1/2 z-10 -translate-y-1/2"
      >
        <TbArrowRight className="h-7 w-7 translate-x-px stroke-2 text-gray-600" />
      </IconButton>
    </>
  );
}

function customPagination(_, className) {
  return `<span class="${className} w-4 h-4 [&.swiper-pagination-bullet-active]:!opacity-100 [&.swiper-pagination-bullet-active]:[background:rgb(var(--color-background))] !opacity-50 ![background:rgb(var(--color-background))]"></span>`;
}

export default function CarouselDemo() {
  return (
    <div className="w-full border-2 rounded-xl">
      <Swiper
        pagination={{
          enabled: true,
          clickable: true,
          dynamicBullets: true,
          renderBullet: customPagination,
        }}
        modules={[Navigation, Pagination]}
        className="relative rounded-lg [&_div.swiper-button-next]:text-background [&_div.swiper-button-prev]:text-background"
      >
        {slides.map((slide, index) => {
            return (
                <SwiperSlide key={index}>
                    <img src={slide.img} alt="" />
                </SwiperSlide>
            )
        })}
        <CustomNavigation />
      </Swiper>
    </div>
  );
}
