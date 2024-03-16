import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import IMAGE_1 from '@assets/banner/banner1.jpg';
import IMAGE_2 from '@assets/banner/banner2.jpeg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';

export const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper animate__animated animate__zoomIn animate__slow	2s"
    >
      <SwiperSlide>
        <img src={IMAGE_1} alt="imagen 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={IMAGE_2} alt="imagen 2" />
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  )
}
