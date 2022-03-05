import * as React from 'react';
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide, } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay } from "swiper";

export default function Slider2Bar() {

  return (
    <>
    <div style={{maxWidth:'1200px',margin:'auto'}}>
      <Swiper
        dir="rtl"
        loop={true}
        slidesPerView={"auto"}
       /*    spaceBetween={20}   */
        autoplay={{
          delay:2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
      </Swiper>
      </div>
      <div style={{maxWidth:'800px',margin:'auto'}}>
      <Swiper
        dir="ltr"
        loop={true}
        slidesPerView={4}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
        className="mySwiper slider02"
      >
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/vercel.svg" alt="Vercel Logo" layout="fill" /></SwiperSlide>
        
      </Swiper>
      </div>
      
    
    </>
  );
}
