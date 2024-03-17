import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import IMAGE_1 from "@assets/banner/rsz_banner1.jpg";
import IMAGE_2 from "@assets/banner/rsz_2banner2.jpg";
import IMAGE_3 from "@assets/banner/rsz_banner3.jpg";
import IMAGE_4 from "@assets/banner/rsz_banner4.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

export const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        slidesPerView={2}
        modules={[Autoplay, Pagination, Navigation]}
        className=" animate__animated animate__zoomIn animate__slow 2s"
      >
        <SwiperSlide>
          <img src={IMAGE_1} alt="imagen 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMAGE_2} alt="imagen 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMAGE_3} alt="imagen 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMAGE_4} alt="imagen 3" />
        </SwiperSlide>
        <br />
      </Swiper>
    </>
  );
};
