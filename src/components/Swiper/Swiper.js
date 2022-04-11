
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slide() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          initialSlide : 3,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./images/slide1.png" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slide2.png" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slide3.png"   alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slide4.png"  alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slide5.png"  alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slide6.png"  alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slide7.png" alt="nature" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
