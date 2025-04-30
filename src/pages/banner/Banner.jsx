import React from 'react';
import SwiperCore from "swiper/core";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
SwiperCore.use([Autoplay]);

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        slidesPerView={3}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div>
          <SwiperSlide>
            <Swiper
              spaceBetween={50}
              autoplay={{ delay: 1, disableOnInteraction: false }}
              slidesPerView={3}
              loop={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4<br/></SwiperSlide>
              </div>
            </Swiper>
          </SwiperSlide>
        </div>
        <div>
          <SwiperSlide>
            <Swiper
              spaceBetween={50}
              autoplay={{ delay: 1, disableOnInteraction: false }}
              slidesPerView={3}
              loop={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </div>
            </Swiper>
          </SwiperSlide>
        </div>
        <div>
          <SwiperSlide>
            <Swiper
              spaceBetween={50}
              autoplay={{ delay: 1, disableOnInteraction: false }}
              slidesPerView={3}
              loop={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </div>
            </Swiper>
          </SwiperSlide>
        </div>
        <div>
          <SwiperSlide>
            <Swiper
              spaceBetween={50}
              autoplay={{ delay: 1, disableOnInteraction: false }}
              slidesPerView={3}
              loop={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </div>
            </Swiper>
          </SwiperSlide>
        </div>
        
      </Swiper>
    </div>
  );
};

export default Banner;